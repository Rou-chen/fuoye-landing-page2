"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Modern Header with blur effect */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/images/fuoye-logo.png"
                  alt="FUOYE Logo"
                  width={160}
                  height={55}
                  priority
                  className="h-14 w-auto"
                />
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-1">
              {["About", "Academics", "Admissions", "News", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#4f6802] hover:bg-[#4f6802]/5 rounded-lg transition-all duration-200"
                  >
                    {item}
                  </a>
                )
              )}
              <button className="ml-4 px-6 py-2.5 bg-[#4f6802] text-white text-sm font-semibold rounded-lg hover:bg-[#475d01] hover:shadow-lg hover:scale-105 transition-all duration-200">
                Portal Login
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Modern Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="FUOYE Campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#4f6802]/95 via-[#3a4f02]/90 to-gray-900/95" />

          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6b8b03]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4f6802]/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white/90 text-sm font-medium tracking-wide">
              🎓 Excellence in Education Since 2011
            </span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Federal University
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-100 to-white">
              Oye-Ekiti
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Shaping the future through world-class education, groundbreaking
            research, and innovation that transforms communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#admissions"
              className="group px-8 py-4 bg-white text-[#4f6802] rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              Apply Now
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#about"
              className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold text-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Discover More
              <svg
                className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "16+", label: "Faculties" },
              { number: "50+", label: "Departments" },
              { number: "10K+", label: "Students" },
              { number: "200+", label: "Faculty Members" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Section with Modern Layout */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4f6802]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4f6802]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#4f6802]/10 rounded-full">
              <span className="text-[#4f6802] text-sm font-bold tracking-wide">
                ABOUT US
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Where Excellence
              <br />
              <span className="text-[#4f6802]">Meets Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A leading institution committed to academic excellence and
              transformative education
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#4f6802] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Premier Institution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Established as a beacon of learning, FUOYE provides
                      world-class education and fosters research excellence
                      across diverse fields of study.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#4f6802] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      State-of-the-Art Facilities
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our modern infrastructure and cutting-edge laboratories
                      provide students with the tools they need to excel in
                      their academic pursuits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#4f6802] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Global Impact
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We produce graduates who are well-equipped to make
                      meaningful contributions to society and the global
                      community.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4f6802]/20 to-transparent rounded-3xl transform rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/dons.jpg"
                  alt="FUOYE Faculty"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[600px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="academics"
        className="py-32 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#4f6802]/10 rounded-full">
              <span className="text-[#4f6802] text-sm font-bold tracking-wide">
                EXPLORE
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Your Path to <span className="text-[#4f6802]">Success</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                ),
                title: "Academic Programs",
                desc: "Diverse undergraduate and postgraduate programs designed for excellence",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                ),
                title: "Admissions",
                desc: "Streamlined application process with comprehensive support",
                color: "from-green-500 to-green-600",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                ),
                title: "Campus Life",
                desc: "Vibrant community with modern facilities and activities",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                ),
                title: "Research",
                desc: "Cutting-edge research initiatives and innovation centers",
                color: "from-orange-500 to-orange-600",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4f6802] to-[#6b8b03] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:bg-white/20">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section with Modern Cards */}
      <section id="news" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#4f6802]/10 rounded-full">
              <span className="text-[#4f6802] text-sm font-bold tracking-wide">
                LATEST
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              FUOYE <span className="text-[#4f6802]">Today</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/orientation.jpg",
                category: "CAMPUS NEWS",
                title: "New Student Orientation 2025",
                desc: "Welcome celebration showcasing campus facilities and introducing academic programs to incoming students.",
              },
              {
                image: "/images/utme.jpg",
                category: "ADMISSIONS",
                title: "2025/2026 Admission Open",
                desc: "UTME screening details and comprehensive admission requirements for prospective students.",
              },
              {
                image: "/images/dons.jpg",
                category: "ACADEMIC",
                title: "Faculty Excellence Awards",
                desc: "Celebrating outstanding achievements in teaching and research among our distinguished faculty.",
              },
            ].map((article, idx) => (
              <article
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-[#4f6802] text-white text-xs font-bold rounded-full tracking-wide">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4f6802] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#4f6802] font-bold group-hover:gap-4 transition-all"
                  >
                    Read More
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#4f6802] via-[#3a4f02] to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/orientation.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join thousands of students who are shaping the future at FUOYE. Your
            path to excellence starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="group px-10 py-5 bg-white text-[#4f6802] rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              Start Your Application
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#"
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold text-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <Image
                  src="/images/fuoye-logo.png"
                  alt="FUOYE Logo"
                  width={140}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Excellence in teaching, research, and community service.
              </p>
              <div className="flex gap-3">
                {[
                  { name: "facebook", icon: <FaFacebookF /> },
                  { name: "twitter", icon: <FaTwitter /> },
                  { name: "instagram", icon: <FaInstagram /> },
                  { name: "linkedin", icon: <FaLinkedinIn /> },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#4f6802] transition-all duration-300 hover:scale-110 text-white"
                  >
                    <span className="sr-only">{social.name}</span>
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  "Academic Calendar",
                  "E-Learning Portal",
                  "Library Services",
                  "Student Portal",
                  "Staff Portal",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#4f6802] transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-[#4f6802] transition-colors" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#4f6802] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Oye-Ekiti, Ekiti State, Nigeria</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#4f6802]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@fuoye.edu.ng</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#4f6802]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+234 XXX XXX XXXX</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest news
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4f6802] transition-colors"
                />
                <button className="px-6 py-3 bg-[#4f6802] rounded-lg hover:bg-[#475d01] transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Federal University Oye-Ekiti. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-[#4f6802] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#4f6802] transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-[#4f6802] transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
