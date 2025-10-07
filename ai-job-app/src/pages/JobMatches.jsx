import { useEffect, useState } from "react";
import API from "../api/api";

export default function JobMatches() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await API.get("/recommended_jobs");
      setJobs(res.data.jobs || []);
    };
    fetchJobs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4">Recommended Jobs</h2>
      {jobs.length === 0 ? (
        <p>No matches yet. Upload your CV first!</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <div key={job.job_id} className="border rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
              <p className="mt-2 text-sm">
                Match Score: <span className="font-bold">{(job.match_score * 100).toFixed(0)}%</span>
              </p>
              <a
                href={job.url}
                target="_blank"
                className="inline-block mt-3 text-blue-600 hover:underline"
              >
                View Job
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
