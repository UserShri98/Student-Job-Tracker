import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobService from "../services/jobService";

const AddJob = () => {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    jobService.addJob(form);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Job Application</h2>
      <form onSubmit={handleSubmit}>
        <input name="company" placeholder="Company" onChange={handleChange} required />
        <input name="role" placeholder="Role" onChange={handleChange} required />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input type="date" name="date" onChange={handleChange} required />
        <input name="link" placeholder="Job Link" onChange={handleChange} />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
