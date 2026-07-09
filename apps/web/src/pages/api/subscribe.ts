import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { newsletterSchema } from '@/components/Newsletter/schema';

// To run API endpoints dynamically during request time, we turn on Server-Side Rendering (SSR) mode
export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    
    // 1. Double check validation safety server side via Zod
    const validation = newsletterSchema.safeParse(body);
    if (!validation.success) {
      const issueMessage = validation.error.issues[0]?.message ?? 'Invalid request payload.';
      return new Response(JSON.stringify({ error: issueMessage }), { status: 400 });
    }

    const { email } = validation.data;

    // 2. Transmit the payload metadata securely via Resend
    // While the domain is processing, we use the Resend testing sandbox settings.
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // <-- SWAP THIS to 'notify@greenimpactinnovators.org' once your domain is ready!
      to: [email], // During testing sandbox mode, you can only send emails to yourself (the account owner)
      subject: '✨ Green Impact Innovators | Your update request is confirmed',
      html: `
        <div style="font-family: sans-serif; background-color: #020617; color: #f8fafc; padding: 40px; border-radius: 16px; max-width: 600px; margin: 0 auto; border: 1px solid #1e293b;">
          <span style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; color: #34d399; background-color: rgba(5, 150, 105, 0.2); padding: 6px 12px; border-radius: 9999px;">Update Request Confirmed</span>
          <h1 style="font-size: 28px; font-weight: 900; color: #ffffff; margin-top: 24px; margin-bottom: 8px; tracking: -0.025em;">Green Impact Innovators</h1>
          <p style="font-size: 16px; color: #94a3b8; line-height: 1.6; margin-bottom: 32px;">Thank you for signing up to receive updates on our progress and upcoming milestones.</p>
          
          <div style="background-color: #0f172a; border: 1px solid #334155; padding: 20px; border-radius: 12px; margin-bottom: 32px;">
            <h3 style="font-size: 12px; font-weight: bold; text-transform: uppercase; color: #64748b; margin-top: 0; margin-bottom: 8px;">What to expect</h3>
            <p style="font-size: 14px; color: #cbd5e1; margin: 0; font-weight: 500;">✓ Updates on certification progress and key milestones</p>
          </div>

          <p style="font-size: 12px; color: #475569; margin: 0;">This is an automated notification to keep you informed about our work.</p>
        </div>
      `
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, id: data?.id }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Internal system fault.' }), { status: 500 });
  }
};
