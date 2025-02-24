import { json } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';
import {
	SENDGRIND_API_KEY,
	EMAIL_FROM,
	PDF_GUIDE_URL,
	STRIPE_API_KEY,
	STRIPE_WEBHOOK_SECRET
} from '$env/static/private';
import Stripe from 'stripe';

const stripe = new Stripe(STRIPE_API_KEY);

sgMail.setApiKey(SENDGRIND_API_KEY);

export async function POST({ request }) {
	try {
		const body = await request.text();
		const signature = request.headers.get('stripe-signature') || '';

		const stripeEvent = stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET);

		if (stripeEvent.type !== 'checkout.session.completed') {
			return json({ success: false, message: 'Invalid event type' }, { status: 400 });
		}

		const { name, email } = stripeEvent?.data?.object.customer_details || {};

		const response = await fetch(PDF_GUIDE_URL);
		const pdfBuffer = await response.arrayBuffer();
		const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');

		const message = {
			to: email ?? '',
			from: EMAIL_FROM,
			subject: 'Your purchase confirmation - Complete Spain Relocation Guide',
			html: `
            <h1>Thank You for Your Purchase!</h1>
            <p>Dear ${name},</p>
            <p>We appreciate your purchase of the <strong>Complete Spain Relocation Guide</strong>. We're confident that this ebook will provide you with the insights and advice you need to make your move to Spain as smooth and stress-free as possible.</p>
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>You will find your ebook attached to this email. Please download and save it for future reference.</li>
              <li>A separate purchase confirmation has been sent to your email as well.</li>
              <li>If you have any questions or need further assistance, don't hesitate to reach out to us at support@kizo-agency.com.</li>
            </ul>
            <p>Thank you once again for choosing our guide. We wish you the best of luck on your journey to Spain!</p>
            <p>Best regards,<br/>The Kizo Agency Team</p>
          `,
			arguments: [
				{
					content: pdfBase64,
					fileName: 'Digital Ebook - Spain relocation.pdf',
					type: 'application/pdf',
					disposition: 'attachment'
				}
			]
		};

		await sgMail.send(message);

		return json({ success: true, message: 'Email sent' });
	} catch (error) {
		console.error('Webhook signature verification failed:', error);

		return json(
			{
				success: false,
				message:
					'An error occurred while sending the purchase confirmation email. Please try again.'
			},
			{ status: 500 }
		);
	}
}
