import React, { useState, type FormEvent } from "react";
import Navbar from "~/components/Navbar";
import FileUploader from "~/components/FileUploader";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { convertPdfToImage } from "~/lib/pdfToImage";
import { generateUUID } from "~/lib/utills";
import { prepareInstructions } from "constants/index";

const Upload = () => {
  const { isLoading, auth, fs, ai, kv } = usePuterStore();

  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  const handleAnalyze = async ({
    companyName,
    jobDescription,
    jobTitle,
    file,
  }: {
    companyName: string;
    jobDescription: string;
    jobTitle: string;
    file: File;
  }) => {
    setIsProcessing(true);

    setStatusText("Uploading the file...");
    const uploadedFile = await fs.upload([file]);
    if (!uploadedFile) return setStatusText("Error : Failed to upload file");

    setStatusText("Converting to image...");
    const imageFile = await convertPdfToImage(file);
    if (!imageFile.file)
      return setStatusText("Error: Failed to convert PDF to image");

    setStatusText("Uploading the image...");
    const uploadedImage = await fs.upload([imageFile.file]);
    if (!uploadedImage) return setStatusText("Error: Failed to upload image");

    setStatusText("Preparing data...");
    const uuid = generateUUID();
    const data = {
      id: uuid,
      resumePath: uploadedFile.path,
      imagePath: uploadedImage.path,
      companyName,
      jobTitle,
      jobDescription,
      feedback: "",
    };

    await kv.set(`resume: ${uuid}`, JSON.stringify(data));
    setStatusText("Analyzing...");

    const feedback = await ai.feedback(
      uploadedFile.path,
      prepareInstructions({ jobDescription, jobTitle })
    );

    if (!feedback) return setStatusText("Error: Failed to analyze resume");

    const feedbackText =
      feedback.message.content === "string"
        ? feedback.message.content
        : feedback.message.content[0].text;

    data.feedback = JSON.parse(feedbackText);
    await kv.set(`resume: ${uuid}`, JSON.stringify(data));
    setStatusText("Analysis complete, redirecting...");

    console.log(data);
    navigate(`/resume/${uuid}`);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    if (!form) return;

    const formData = new FormData(form);

    const companyName = formData.get("company-name") as string;
    const jobTitle = formData.get("job-title") as string;
    const jobDescription = formData.get("job-description") as string;

    if (!file) return;
    handleAnalyze({ jobDescription, jobTitle, companyName, file });
  };

  return (
    <main className="min-h-screen w-full bg-white text-black">
      <Navbar />

      <section className="w-full px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
            Smart feedback for your dream job
          </h1>

          {/* Status or Instructions */}
          {isProcessing ? (
            <>
              <h2 className="text-lg md:text-xl text-gray-700">{statusText}</h2>
              <img
                src="/images/resume-scan.gif"
                alt="Scanning resume"
                className="w-full max-w-md rounded-xl mt-6 shadow-lg"
              />
            </>
          ) : (
            <h2 className="text-lg md:text-xl text-gray-600">
              Drop your resume for an ATS score and improvement tips
            </h2>
          )}

          {/* Upload Form */}
          {!isProcessing && (
            <form
              id="upload-form"
              onSubmit={handleSubmit}
              className="w-full mt-10 bg-white border border-gray-200 rounded-2xl p-6 md:p-10 flex flex-col gap-6 shadow-lg"
            >
              {/* Company Name */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="company-name"
                  className="text-sm items-start justify-start flex text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company-name"
                  name="company-name"
                  placeholder="e.g. Amazon"
                  className="bg-gray-100 text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-gray-400 focus:ring-1 "
                />
              </div>

              {/* Job Title */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="job-title"
                  className="items-start justify-start flex text-sm text-gray-700"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="job-title"
                  name="job-title"
                  placeholder="e.g. Frontend Developer"
                  className="bg-gray-100 text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-gray-400 focus:ring-1 "
                />
              </div>

              {/* Job Description */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="job-description"
                  className="text-sm items-start justify-start flex text-gray-700"
                >
                  Job Description
                </label>
                <textarea
                  id="job-description"
                  name="job-description"
                  rows={5}
                  placeholder="Paste the job description here..."
                  className="bg-gray-100 text-black px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-gray-400 focus:ring-1  resize-none"
                />
              </div>

              {/* File Uploader */}
              <div className="flex flex-col gap-1">
                <FileUploader
                  key={file ? "selected" : "cleared"}
                  onFileSelect={handleFileSelect}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="border-2 border-gray-200 font-semibold py-3 rounded-xl transition duration-200"
              >
                Analyze Resume
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Upload;
