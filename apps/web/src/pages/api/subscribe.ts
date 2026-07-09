import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { newsletterSchema } from '@/components/Newsletter/schema';

// Required for Astro static builder mapping on custom paths
export function getStaticPaths() {
  return [];
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Moved inside the request handler with a dummy fallback string 
    // so it never executes or crashes during the static build phase.
    const apiKey = import.meta.env.RESEND_API_KEY || "re_dummy_key_for_build_passing";
    const resend = new Resend(apiKey);

    const body = await request.json();
    const validation = newsletterSchema.safeParse(body);
    if (!validation.success) {
      return new Response(JSON.stringify({ error: 'Invalid payload.' }), { status: 400 });
    }

    const { email } = validation.data;
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: '✨ Green Impact Innovators | Your update request is confirmed',
      html: `<div>Update Request Confirmed for ${email}</div>`
    });

    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    return new Response(JSON.stringify({ success: true, id: data?.id }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Internal system fault.' }), { status: 500 });
  }
};
