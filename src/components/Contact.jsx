import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Users,
  Building,
  Lightbulb,
  Heart,
  Globe,
  Clock,
  CheckCircle,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    contactType: "general",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        organization: "",
        contactType: "general",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactTypes = [
    {
      id: "general",
      name: "General Inquiry",
      description: "General questions about our smart energy brick project",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      id: "partnership",
      name: "Partnership & Collaboration",
      description: "Interested in partnering with us or joining our mission",
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: "research",
      name: "Research & Academic",
      description:
        "Academic inquiries, research collaboration, or student projects",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      id: "deployment",
      name: "Deployment & Installation",
      description: "Interested in deploying smart bricks in your location",
      icon: <Building className="w-6 h-6" />,
    },
    {
      id: "media",
      name: "Media & Press",
      description: "Press inquiries, interviews, or media coverage requests",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      id: "support",
      name: "Technical Support",
      description:
        "Technical questions, troubleshooting, or implementation help",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "contact@smartenergybricks.org",
      link: "mailto:contact@smartenergybricks.org",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Address",
      value: "123 Innovation Drive, Tech Campus, CA 94025",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Office Hours",
      value: "Mon-Fri, 9:00 AM - 6:00 PM PST",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "#",
      color: "hover:text-gray-800",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "#",
      color: "hover:text-red-600",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "#",
      color: "hover:text-blue-700",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "#",
      color: "hover:text-pink-600",
    },
  ];

  const faqs = [
    {
      question: "How can I get involved with the Smart Energy Bricks project?",
      answer:
        "There are many ways to get involved! You can contribute as a researcher, partner with us for deployment, support our mission through funding, or simply spread awareness. Contact us using the form above to discuss specific opportunities.",
    },
    {
      question: "Can smart energy bricks be installed in my city?",
      answer:
        "We are actively expanding to new cities worldwide. The feasibility depends on factors like foot traffic, infrastructure compatibility, and local regulations. Contact us with your location details for a feasibility assessment.",
    },
    {
      question: "Are you looking for research collaborators?",
      answer:
        "Absolutely! We welcome collaboration with universities, research institutions, and independent researchers. We are particularly interested in partnerships focusing on materials science, energy systems, and sustainability.",
    },
    {
      question: "How can my organization partner with you?",
      answer:
        "We partner with various types of organizations including municipalities, corporations, NGOs, and educational institutions. Partnership opportunities include deployment sites, funding, research collaboration, and technology integration.",
    },
    {
      question: "Do you offer internships or student project opportunities?",
      answer:
        "Yes! We regularly work with students on research projects, internships, and thesis work. We offer opportunities in engineering, computer science, environmental science, and business development.",
    },
    {
      question: "How can I stay updated on project developments?",
      answer:
        "Follow us on our social media channels, subscribe to our newsletter, or check our website regularly for updates on research progress, deployments, and partnership announcements.",
    },
  ];

  const officeLocations = [
    {
      city: "San Francisco, CA",
      address: "123 Innovation Drive, Tech Campus",
      type: "Main Office",
      description: "Primary research and development hub",
      coordinates: "37.7749° N, 122.4194° W",
    },
    {
      city: "Boston, MA",
      address: "456 Research Blvd, University District",
      type: "Research Lab",
      description: "Materials science and energy systems research",
      coordinates: "42.3601° N, 71.0589° W",
    },
    {
      city: "Austin, TX",
      address: "789 Sustainability Ave, Green Tech Park",
      type: "Regional Office",
      description: "Southern region deployment and partnerships",
      coordinates: "30.2672° N, 97.7431° W",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-4">
              <MessageSquare className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Get In Touch</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold">
              Let's Build a Sustainable
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Future Together
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're interested in partnership, research collaboration,
              deployment opportunities, or just want to learn more about our
              Smart Energy Bricks project, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll respond to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Type Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        What type of inquiry is this?
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {contactTypes.map((type) => (
                          <label
                            key={type.id}
                            className={`relative flex items-start space-x-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                              formData.contactType === type.id
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="contactType"
                              value={type.id}
                              checked={formData.contactType === type.id}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div
                              className={`flex-shrink-0 ${
                                formData.contactType === type.id
                                  ? "text-blue-600"
                                  : "text-gray-400"
                              }`}
                            >
                              {type.icon}
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">
                                {type.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {type.description}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Organization (Optional)
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company, university, or organization"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Please provide details about your inquiry, including any specific questions or requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 px-8 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all font-semibold flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          {info.label}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-600">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Follow Our Journey
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex flex-col items-center p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all ${social.color}`}
                    >
                      <div className="mb-2">{social.icon}</div>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Project Impact
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-bold text-green-600">
                      &lt; 24 hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Partners</span>
                    <span className="font-bold text-blue-600">25+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cities Reached</span>
                    <span className="font-bold text-purple-600">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Projects Completed</span>
                    <span className="font-bold text-orange-600">150+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at one of our offices or research facilities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{location.city}</h3>
                    <p className="text-blue-600 text-sm">{location.type}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">{location.address}</p>
                  <p className="text-gray-500 text-sm">
                    {location.description}
                  </p>
                  <p className="text-gray-400 text-xs font-mono">
                    {location.coordinates}
                  </p>
                </div>

                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <span className="text-sm font-medium">Get Directions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our Smart Energy Bricks
              project.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your question here? We're happy to help!
            </p>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all font-semibold">
              Ask a Question
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for the latest updates on research
            progress, new deployments, and partnership opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Subscribe
            </button>
          </div>

          <p className="text-blue-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
