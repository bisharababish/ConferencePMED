interface FAQsProps {
  onNavigate?: (tab: string) => void;
}

const FAQs = ({ onNavigate }: FAQsProps) => {
  const faqs = [
    {
      question: "What is Pal-Swiss Tech Hubs?",
      answer: "Pal-Swiss Tech Hub is an initiative by AlNayzak in partnership with the Swiss Agency for Development and Cooperation (SDC). We connect skilled Palestinian developers, QA engineers, and DevOps specialists with European companies, handling recruiting, contracts, payroll, and compliance."
    },
    {
      question: "How does the hiring process work?",
      answer: "Companies can get started by contacting us. We handle the entire process from recruiting and vetting talent to setting up contracts, managing payroll, and ensuring EU compliance. Your team can start working quickly with our streamlined onboarding."
    },
    {
      question: "How do I apply as a developer?",
      answer: "Simply submit your CV through our platform. Once you apply, we'll match you with European companies that fit your skills and experience. You only need to apply once to access multiple opportunities."
    },
    {
      question: "What types of roles are available?",
      answer: "We work with software developers across all stacks, QA engineers, and DevOps specialists. We match talent with European companies looking for remote team members."
    },
    {
      question: "Where is the work location?",
      answer: "We have a co-working facility in Ramallah where our team members can work. We also have legal entities in Switzerland and the U.S., and are planning a Gaza hub. All work meets European standards and operates in a secure, well-supported environment."
    },
    {
      question: "What compliance standards do you meet?",
      answer: "We ensure full EU compliance for contracts, payroll, and employment regulations. With legal entities in Switzerland and the U.S., we handle all the legal and administrative aspects so companies can focus on building great products."
    },
    {
      question: "How quickly can a team be deployed?",
      answer: "Our rapid deployment process means you can get your team up and running quickly. We handle all the administrative work, so once talent is matched, they can start contributing to your projects right away."
    },
    {
      question: "What is the Jenan project?",
      answer: "Jenan serves all Palestine & region, providing comprehensive tech solutions and support to the local tech community as part of our broader mission to connect Palestinian talent with global opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-700 mb-12 text-center">
          Everything you need to know about Pal-Swiss Tech Hubs
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                {faq.question}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Still have questions?
          </h2>
          <p className="text-gray-700 mb-6">
            Get in touch with us and we'll be happy to help.
          </p>
          <button 
            onClick={() => {
              if (onNavigate) {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-base transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

