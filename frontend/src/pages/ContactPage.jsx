const ContactPage = () => {
  return (
    <section className="py-20 px-4 lg:px-0 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Get in Touch</h1>
          <p className="text-gray-600 text-lg">
            Have a question or need help with your order? We're here for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us what’s on your mind..."
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Support</h3>
              <p className="text-gray-600">Email: support@shopovia.com</p>
              <p className="text-gray-600">Phone: +1 (800) 123-4567</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Store Address</h3>
              <p className="text-gray-600">Shopovia HQ</p>
              <p className="text-gray-600">74 Street, New York, NY 10001</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p className="text-gray-600">Sat – Sun: Closed</p>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
