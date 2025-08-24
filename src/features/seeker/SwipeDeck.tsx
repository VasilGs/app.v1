import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import JobCard from "./JobCard";

interface Job {
  id: number;
  company: string;
  position: string;
  location: string;
  salary: string;
  logo: string;
}

export default function SwipeDeck() {
  // Example jobs for now – later fetch from Supabase
  const [jobs, setJobs] = React.useState<Job[]>([
    {
      id: 1,
      company: "Glorier",
      position: "React Developer",
      location: "Sofia, Bulgaria",
      salary: "€2,500",
      logo: "https://placehold.co/80x80"
    },
    {
      id: 2,
      company: "NovaLife",
      position: "Truck Driver",
      location: "Dublin, Ireland",
      salary: "€3,000",
      logo: "https://placehold.co/80x80"
    }
  ]);

  const [index, setIndex] = React.useState(0);

  function handleSwipe(direction: "left" | "right") {
    const job = jobs[index];
    console.log(`Swiped ${direction} on`, job);
    setIndex((i) => i + 1);
  }

  if (index >= jobs.length) {
    return (
      <div className="flex items-center justify-center h-[400px] text-xl">
        No more jobs
      </div>
    );
  }

  const currentJob = jobs[index];

  return (
    <div className="flex justify-center p-6">
      <AnimatePresence>
        <motion.div
          key={currentJob.id}
          drag="x"
          onDragEnd={(_, info) => {
            if (info.offset.x > 120) handleSwipe("right");
            if (info.offset.x < -120) handleSwipe("left");
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, y: 30 }}
        >
          <JobCard
            job={currentJob}
            onSwipe={handleSwipe}
            onCardClick={(j) => console.log("Clicked", j)}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
