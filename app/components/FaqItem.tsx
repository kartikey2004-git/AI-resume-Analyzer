import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-lg font-medium text-white flex justify-between items-center"
      >
        {question}
        <span className="ml-2">{open ? "-" : "+"}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden text-neutral-400 mt-2 text-sm md:text-base"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
