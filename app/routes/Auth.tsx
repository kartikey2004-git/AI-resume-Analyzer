import { LucideCalendarRange, User } from "lucide-react";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export const meta = () => [
  { title: "CVForge | Auth" },
  { name: "description", content: "Log into your account" },
];

const Auth = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const steps = [
    {
      step: "1",
      title: "Upload your resume",
      description:
        "Upload your resume or CV in PDF, Word Doc, or plain text format. Our software parses it in seconds.",
    },
    {
      step: "2",
      title: "Review your information",
      description:
        "Check each section of your resume to confirm everything parsed correctly. If it looks good here, ATS systems can read it.",
    },
    {
      step: "3",
      title: "Get actionable suggestions",
      description:
        "We’ll suggest improvements — from fixing grammar to adding high-impact skills — so you can update and apply with confidence.",
    },
  ];

  const faqs = [
    {
      question: "What is CVForge?",
      answer:
        "CVForge is an AI-powered platform to help job seekers analyze, rate, and improve their resumes using ATS standards. It also helps recruiters identify top candidates faster.",
    },
    {
      question: "How do I get my resume analyzed?",
      answer:
        "Upload your resume as a PDF or Doc file, and CVForge instantly provides a detailed analysis with ratings and suggestions.",
    },
    {
      question: "Is CVForge free to use?",
      answer:
        "Yes. Basic resume analysis, ATS scoring, and feedback are free to use.",
    },
    {
      question: "Can recruiters post jobs?",
      answer:
        "Absolutely. Recruiters view AI-ranked applicants based on resume relevance and skills.",
    },
  ];

  const checklistItems = [
    {
      title: "Format",
      detail:
        "Use standard fonts (Arial, Calibri). Save as .docx or .pdf. Skip graphics.",
    },
    {
      title: "Structure",
      detail:
        "Use clear headings. List work history in reverse chronological order.",
    },
    {
      title: "Keywords",
      detail: "Mirror job description terms and role-specific skills.",
    },
    {
      title: "ATS Compatibility",
      detail:
        "Avoid tables/images. Use basic bullet points and clear formatting.",
    },
    {
      title: "Proofreading",
      detail: "Fix typos, formatting issues, and update job history.",
    },
    {
      title: "File Naming",
      detail: "Use a clean file name like John_Doe_Resume.pdf.",
    },
  ];

  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();

  // FIXED: Safe handling of next URL param
  const params = new URLSearchParams(location.search);
  const next = params.get("next") || "/";

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next, navigate]);

  return (
    <main className="w-full min-h-screen bg-white text-black flex flex-col">
      {/* HERO */}
      <motion.section
        className="h-[500px] px-4 flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1f2937] leading-tight tracking-tighter max-w-3xl">
          AI-Powered Resume Review
          <br />
          <span className="text-[#111827]">Get Smart Feedback in Seconds</span>
        </h1>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow text-sm">
            <img
              src="/images/img.jpg"
              alt="Kartikey Bhatnagar"
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-gray-800">Built by Kartikey Bhatnagar</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow text-sm">
            <User className="w-5 h-5 text-gray-700" />
            <span className="text-gray-800">Reviewed by Peers</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
          <LucideCalendarRange className="w-4 h-4" />
          <span>{today}</span>
        </div>

        {/* LOGIN BUTTON — FIXED */}
        <div className="mt-10">
          {isLoading ? (
            <button className="px-10 py-4 bg-black text-white font-semibold rounded-xl animate-pulse">
              Signing you in...
            </button>
          ) : auth.isAuthenticated ? (
            <button
              onClick={auth.signOut}
              className="px-10 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all"
            >
              Log out
            </button>
          ) : (
            <button
              onClick={auth.signIn}
              className="px-12 py-4 bg-black text-white font-semibold rounded-xl text-lg hover:bg-gray-900 transition-all"
            >
              Get Started
            </button>
          )}
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <section className="bg-white text-gray-900 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">
              How to use our resume checker{" "}
              <span className="text-gray-900">for free</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our resume scanner checks all the key elements to ensure your
              resume is competitive — and unlike others, it’s completely free.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {steps.map(({ step, title, description }) => (
              <div
                key={step}
                className="p-6 border rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-semibold mt-4">{title}</h3>
                <p className="text-gray-700 mt-2 text-base leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-[#f9fafb] py-20 px-4 md:px-10 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Resume Optimization Checklist
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
              A quick run-through to make your resume ATS-friendly and
              interview-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checklistItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center">
            What Users Say
          </h2>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 border border-gray-200 rounded-2xl">
              <p className="text-gray-700 italic">
                “The analysis was shockingly accurate. It helped me land three
                interviews.”
              </p>
              <p className="mt-5 font-semibold">— Anuj, Marketing</p>
            </div>

            <div className="p-8 border border-gray-200 rounded-2xl">
              <p className="text-gray-700 italic">
                “Love that everything stays inside the browser. Fast, private,
                and reliable.”
              </p>
              <p className="mt-5 font-semibold">— Riya, Software Dev</p>
            </div>

            <div className="p-8 border border-gray-200 rounded-2xl">
              <p className="text-gray-700 italic">
                “Way cleaner than other resume tools. The ATS score helped me
                fix my wording.”
              </p>
              <p className="mt-5 font-semibold">— Manish, Analyst</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <motion.section
        id="faqs"
        className="w-full py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl text-center font-semibold tracking-wider mb-2">
            FAQs
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Everything you need to know about how CVForge works.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="max-w-4xl mx-auto divide-y divide-white/10 rounded-xl backdrop-blur-sm"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg font-normal py-4 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-sm sm:text-base pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.section>

      {/* CARD ABOUT YOU */}
      <motion.section
        className="text-black rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-xl mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src="/images/img.jpg"
            alt="Kartikey Bhatnagar"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />

          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold">Kartikey Bhatnagar</h2>
            <p className="text-sm text-gray-700 mb-2">
              Pre-final Year Engineering Student
            </p>

            <p className="text-sm leading-relaxed text-gray-600">
              Kartikey has 1+ years in full-stack development with hands-on
              experience in MERN and Next.js. Focused on clean UI, responsive
              design, and real-world development.
            </p>

            <div className="flex gap-4 mt-4 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/Bh20291Kartikey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/kartikey2004-git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Auth;
