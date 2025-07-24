import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import Hero from "~/components/HomePage/1_Hero";
import ResumeWarningSection from "~/components/HomePage/2_ResumeWarningSection";
import WhyUseResumeChecker from "~/components/HomePage/3_WhyResumeChecker";
import HowItWorksSection from "~/components/HomePage/4_HowItWorksSection";
import ResumeCheckListSection from "~/components/HomePage/5_ResumeChecklistSection";
import Faqs from "~/components/HomePage/6_Faqs";
import AboutMe from "~/components/HomePage/7_AboutMe";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVForge" },
    {
      name: "description",
      content:
        "Refines, analyzes, and shapes resumes into decision-ready insights.",
    },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);

      const resumes = (await kv.list("resume: *", true)) as KVItem[];

      const parsedResumes = resumes?.map(
        (resume) => JSON.parse(resume.value) as Resume
      );

      console.log("parsed Resumes", parsedResumes);

      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    };

    loadResumes();
  }, []);

  return (
    <div>
      <Navbar />

      <main className="min-h-[40vh]">
        <Hero />
        <ResumeWarningSection/>
        <WhyUseResumeChecker />
        <HowItWorksSection />
        <ResumeCheckListSection />
        <Faqs />
        <AboutMe />
      </main>
    </div>
  );
}



        // <section className="mt-10 px-4 text-center">
        //   {/* Message */}
        //   {!loadingResumes && resumes?.length === 0 ? (
        //     <h2 className="text-lg font-medium">
        //       No resumes found. Upload your first resume to get feedback
        //     </h2>
        //   ) : (
        //     <h2 className="text-lg font-medium">
        //       Review your submissions and check AI-powered feedback
        //     </h2>
        //   )}

        //   {/* Loader */}
        //   {loadingResumes && (
        //     <div className="flex flex-col items-center justify-center mt-10">
        //       <img
        //         src="/images/resume-scan-2.gif"
        //         alt="Loading"
        //         className="w-[200px]"
        //       />
        //     </div>
        //   )}

        //   {!loadingResumes && resumes.length > 0 && (
        //     <div className="resumes-section mt-10 w-full max-w-5xl mx-auto">
        //       {resumes.map((resume) => (
        //         <ResumeCard key={resume.id} resume={resume} />
        //       ))}
        //     </div>
        //   )}

        //   {/* Upload Button if no resumes */}
        //   {!loadingResumes && resumes?.length === 0 && (
        //     <div className="flex justify-center items-center flex-col mt-10 gap-4">
        //       <Link
        //         to="/upload"
        //         className="primary-button w-fit text-xl font-semibold"
        //       >
        //         Upload Resume
        //       </Link>
        //     </div>
        //   )}
        // </section>
