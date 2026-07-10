export interface FAQItem {
  value: string;
  trigger: string;
  content: string;
}

export const localFAQData: FAQItem[] = [
  {
    value: "certification",
    trigger: "What is the current organizational status of Green Impact Innovators?",
    content: "We currently operate as a school-led climate initiative at St. Mary’s Nyalenda Comprehensive School in Kisumu. While we are working toward formalizing our own independent Community-Based Organization (CBO) status, we run our current forest garden programs in close partnership with established local CBOs, including United Destiny Shapers (UDS) and KIYA."
  },
{
    value: "newsletter-privacy",
    trigger: "How will my email and newsletter subscription be handled?",
    content: "Your privacy is important to us. When you sign up for our newsletter to follow our campaign and support our initiatives, your email is securely stored using Resend. We do not use third-party marketing trackers or share your details; we only send direct updates about our school gardens, community clean-up drives, and local climate impact."
  },
  {
    value: "funding",
    trigger: "Do I need to make a financial contribution to subscribe to the newsletter?",
    content: "No. Subscribing to our newsletter to follow our campaign requires no financial transactions. We are primarily looking to build awareness and a supportive network of climate-smart agriculture mentors and strategic partners. For those interested in direct sponsorship, we are currently raising a modest scaling fund to purchase essential garden assets like shade nets, cone gardens, and organic manure."
  },
  {
    value: "model",
    trigger: "What is the 'Forest Garden' approach and how does it work?",
    content: "Our Forest Garden approach is a low-cost, scalable system that combines agriculture, environmental conservation, and youth leadership. We focus on four key areas: growing climate-smart indigenous vegetables, planting trees, reusing local waste (such as collecting and utilizing empty milk packets as seedling bags), and providing hands-on climate education to students."
  },
  {
    value: "beneficiaries",
    trigger: "Who benefits from the food produced in the school gardens?",
    content: "The harvest primarily supports students at St. Mary’s Nyalenda Comprehensive School. Climate-induced food insecurity causes over 300 learners at our school to miss lunch daily. Currently, our programs enable more than 100 of these learners to access fresh, nutritious meals both at school and in their homes."
  },
  {
    value: "birthday-trees",
    trigger: "What is the 'Birthday Tree' initiative?",
    content: "It is a restoration campaign designed to foster a lifelong culture of conservation. We encourage students and community members to celebrate their birthdays by planting a tree seedling. Of the 1,000+ seedlings we have successfully established so far, 50 trees have been planted specifically through this birth initiative."
  }
];