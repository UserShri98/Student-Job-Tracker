import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import jobService from "../services/jobService";
import JobCard from "../components/JobCard";
import FilterBar from "../components/FilterBar";

const Home = () => {
  
    const navigate = useNavigate();

 
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobService.getAllJobs();
        console.log("Fetched jobs:", data); 

        setJobs(data);
        setFilteredJobs(data);
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      }
    };
  
    fetchData();
  }, []);
  

  const handleDelete = (id) => {
    jobService.deleteJob(id);
    const updated = jobs.filter((job) => job._id !== id);
    setJobs(updated);
    setFilteredJobs(updated);
  };

  const handleStatusUpdate = (id, status) => {
    jobService.updateJobStatus(id, status);
    const updated = jobs.map((job) =>
      job._id === id ? { ...job, status } : job
    );
    setJobs(updated);
    setFilteredJobs(updated);
  };

  const handleFilter = (status, date) => {
    let result = [...jobs];
    if (status !== "All") result = result.filter((job) => job.status === status);
    if (date) result = result.filter((job) => job.date === date);
    setFilteredJobs(result);
  };

  return (
    <div>
    <h2>Your Job Applications</h2>
    <button onClick={() => navigate("/add")}> Add New Job</button>
    <FilterBar onFilter={handleFilter} />
    <div className="job-list">
      {filteredJobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        filteredJobs.map((job) => (
          <JobCard
          key={job._id}
          job={job}
            onDelete={handleDelete}
            onUpdateStatus={handleStatusUpdate}
          />
        ))
      )}
    </div>
  </div>
  );
};

export default Home;
