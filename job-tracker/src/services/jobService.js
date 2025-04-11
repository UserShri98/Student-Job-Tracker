const JOBS_KEY = "jobs";

const getJobsFromStorage = () => {
  const data = localStorage.getItem(JOBS_KEY);
  return data ? JSON.parse(data) : [];
};

const saveJobsToStorage = (jobs) => {
  localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
};

const addJob = (job) => {
  const jobs = getJobsFromStorage();
  jobs.push({ ...job, id: Date.now().toString() });
  saveJobsToStorage(jobs);
};

const getAllJobs = () => getJobsFromStorage();

const deleteJob = (id) => {
  const jobs = getJobsFromStorage().filter((job) => job.id !== id);
  saveJobsToStorage(jobs);
};

const updateJobStatus = (id, newStatus) => {
  const jobs = getJobsFromStorage().map((job) =>
    job.id === id ? { ...job, status: newStatus } : job
  );
  saveJobsToStorage(jobs);
};

export default {
  addJob,
  getAllJobs,
  deleteJob,
  updateJobStatus,
};
