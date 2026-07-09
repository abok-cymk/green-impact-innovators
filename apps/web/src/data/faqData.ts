export interface FAQItem {
  value: string;
  trigger: string;
  content: string;
}

export const localFAQData: FAQItem[] = [
  {
    value: "certification",
    trigger: "What is the current status of the CBO certification?",
    content: "We are currently undergoing formal charter audits and regulatory alignment pipelines. Operating as an early-stage Community-Based Organization startup, this pre-launch framework tracks our progressive validation roadmap in real-time."
  },
  {
    value: "registration",
    trigger: "How will my registration data be handled?",
    content: "Your security is a foundational requirement. All email entries sync over a secure TLS layer directly into our isolated Resend verification network registry. We strictly engage zero marketing trackers or cross-site tracking metrics."
  },
  {
    value: "faq-3",
    trigger: "Do I need financial assets to back this network launch?",
    content: "No. Backing our pre-launch phase requires zero financial transactions. By submitting an email, you are registering to an active governance validation to signal community verification interest to our trust donors."
  },
  {
    value: "faq-4",
    trigger: "When will the Python backend infrastructure go live?",
    content: "Our core protocol service architecture is slated to scale immediately following the conclusion of our formal funding rounds and regulatory certification approvals. Initial API nodes will feature open data validation metrics."
  }
];
