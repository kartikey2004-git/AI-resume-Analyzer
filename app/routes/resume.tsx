import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import ATS from "~/components/ATS";
import Details from "~/components/Details";
import Summary from "~/components/Summary";
import { usePuterStore } from "~/lib/puter";

export const meta = () => {
  return [
    { title: "CVForge | Review" },
    { name: "description", content: "Detailed overview of your resume" },
  ];
};

const Resume = () => {
  const { auth, isLoading, fs, kv } = usePuterStore();

  const { id } = useParams();

  const [imageUrl, setImageUrl] = useState("");
  const [resumeUrl, setResumeurl] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated)
      navigate(`/auth?next=/resume/${id}`);
  }, [isLoading]);

  useEffect(() => {
    const loadResume = async () => {
      const resume = await kv.get(`resume: ${id}`);
      if (!resume) return;

      const data = JSON.parse(resume);

      // console.log("Image path:", data.imagePath);

      const resumeBlob = await fs.read(data.resumePath);
      if (!resumeBlob) return;

      // console.log("Resume Blob: ", resumeBlob);

      const pdfBlob = new Blob([resumeBlob], { type: "application/pdf" });
      const resumeUrl = URL.createObjectURL(pdfBlob);
      setResumeurl(resumeUrl);

      const imageBlob = await fs.read(data.imagePath);

      if (!imageBlob) return;

      // console.log("Image Blob: ", imageBlob);

      const imageUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageUrl);

      setFeedback(data.feedback);
      console.log({ resumeUrl, imageUrl, feedback: data.feedback });
    };

    loadResume();
  }, [id]);

  return (
    <main className="pt-0">
      <nav className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
          <span className="text-gray-800 text-sm font-semibold">
            Back to Homepage
          </span>
        </Link>
      </nav>

      {/* MAIN WRAPPER */}

      <div className="flex w-full max-lg:flex-col-reverse gap-6 px-4 md:px-8">
        {/* LEFT – RESUME PREVIEW */}
        <section className="relative flex justify-center items-start lg:w-1/2 w-full">
          {imageUrl && resumeUrl && (
            <div className="w-full max-w-md p-2 rounded-2xl gradient-border animate-in fade-in duration-1000">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={imageUrl}
                  alt="Uploaded Resume"
                  title="resume"
                  className="w-full object-contain rounded shadow-lg border border-gray-200"
                />
              </a>
            </div>
          )}
        </section>

        <section className="flex flex-col gap-8 lg:w-1/2 w-full py-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black">
            Resume Review
          </h2>

          {feedback ? (
            <div className="flex flex-col gap-6 animate-in fade-in duration-1000">
              <Summary feedback={feedback} />
              <ATS
                score={feedback.ATS.score || 0}
                suggestions={feedback.ATS.tips || []}
              />
              <Details feedback={feedback} />
            </div>
          ) : (
            <div className="flex justify-center">
              <img
                src="/images/resume-scan-2.gif"
                alt="Scanning..."
                className="w-full max-w-sm"
              />
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Resume;
