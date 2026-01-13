import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {submitted && (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-8 flex items-center max-w-4xl mx-auto">
            <CheckCircle className="text-green-600 mr-4" size={32} />
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-1">
                Message Sent Successfully!
              </h3>
              <p className="text-green-700">
                Lorem ipsum dolor sit amet. We will get back to you soon.
              </p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Email</h3>
            <p className="text-gray-600">info@conference2025.com</p>
            <p className="text-gray-600">support@conference2025.com</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-600">+1 (555) 987-6543</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Address</h3>
            <p className="text-gray-600">123 Lorem Street</p>
            <p className="text-gray-600">Lorem City, LC 12345</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors text-black"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors text-black"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors text-black"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none text-black"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-black">
              Organizing Committee
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-bold text-black mb-2">
                  Dr. Lorem Ipsum
                </h3>
                <p className="text-gray-600 mb-1">Conference Chair</p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-bold text-black mb-2">
                  Prof. Dolor Sit
                </h3>
                <p className="text-gray-600 mb-1">Program Chair</p>
                <p className="text-gray-700">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-bold text-black mb-2">
                  Dr. Consectetur Amet
                </h3>
                <p className="text-gray-600 mb-1">Local Arrangements Chair</p>
                <p className="text-gray-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-bold text-black mb-3">
                Office Hours
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">10:00 AM - 2:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
