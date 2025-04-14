const BASE_URL = "http://localhost:5000/api";

const addJob = async (job) => {
  const res = await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  return await res.json();
};

const getAllJobs = async () => {
  const res = await fetch(`${BASE_URL}`);
  return await res.json();
};

const deleteJob = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};

const updateJobStatus = async (id, newStatus) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: newStatus }),
  });
  return await res.json();
};

export default {
  addJob,
  getAllJobs,
  deleteJob,
  updateJobStatus,
};
