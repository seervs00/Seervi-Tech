import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-100 min-h-screen text-gray-800 ">
      {/* Hero Section */}
      <section className="text-center px-6 md:px-20  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-40">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Seervi Tech Lab</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Building Intelligent Digital Infrastructure – Empowering Businesses with Scalable Tech Solutions.
        </p>
      </section>

      {/* Our Mission */}
      <section className="px-6 md:px-20 py-16 bg-blue-200 text-center space-y-6">
        <h2 className="text-3xl font-bold text-blue-700">Our Mission</h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-lg">
          To deliver precision-engineered software solutions that empower industries through innovation, performance, and reliability. We aim to be a technology enabler across sectors by transforming ideas into intelligent digital ecosystems.
        </p>
      </section>

      {/* Our Values */}
      <section className="bg-cyan-100 py-16 px-6 md:px-20 text-center space-y-10">
        <h2 className="text-3xl font-bold text-purple-700">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Innovation</h3>
            <p className="text-gray-600">We constantly explore emerging technologies to create forward-thinking, future-ready solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Integrity</h3>
            <p className="text-gray-600">Transparency, trust, and ethical delivery are at the core of every partnership we build.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Excellence</h3>
            <p className="text-gray-600">We push boundaries to deliver high-performance software backed by robust engineering practices.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-b from-purple-200 to-white space-y-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">What We Build</h2>
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-blue-500 mb-2">Software Engineering</h3>
            <p className="text-gray-700">
              Full-cycle custom application development, microservices architecture, CI/CD pipelines, and API-first systems. Get access to expert engineering pods for enterprise development.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-green-500 mb-2">Studio Experiences</h3>
            <p className="text-gray-700">
              Immersive content solutions for live sports, interactive education platforms, and healthcare visualizations using real-time rendering engines and media-rich frameworks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-purple-500 mb-2">Cloud & Hosting</h3>
            <p className="text-gray-700">
              Cloud-native deployments, scalable hosting environments, domain registration services, and secure edge delivery using global CDN and container orchestration.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 md:px-20 py-16 bg-blue-950 text-white text-center space-y-6">
        <h2 className="text-3xl font-bold">Tech Stack We Love</h2>
        <p className="max-w-4xl mx-auto text-blue-200">
          We build with performance, scalability, and modern best practices. Our stack includes:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-100 text-sm">
          <span>React.js / Next.js</span>
          <span>Node.js / Express</span>
          <span>MongoDB / PostgreSQL</span>
          <span>Tailwind CSS / Figma</span>
          <span>Firebase / Clerk</span>
          <span>AWS / Vercel / DigitalOcean</span>
          <span>Docker / GitHub Actions</span>
          <span>Stripe / Razorpay</span>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center space-y-6">
        <h2 className="text-3xl font-bold">Let's Build Something Great</h2>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg">
          Partner with Seervi Tech Lab to engineer impactful software experiences for the digital era.
        </p>
        <Link to ="/#contact">
        <button className="px-8 py-3 bg-white text-indigo-700 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
          Start Your Project
        </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
