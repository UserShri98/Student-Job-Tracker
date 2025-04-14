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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const job = {
      company: form.company,
      role: form.role,
      date: form.date,
      status: form.status,
      link: form.link, 
    };
    
    console.log("Submitting job:", job); 

    try {
      const response = await jobService.addJob(job);
      console.log(response);  
      navigate("/");  
    } catch (err) {
      console.error("Error adding job:", err);
    }
    
  };
  

  return (
    <div>
      <h2>Add Job Application</h2>
      <form onSubmit={handleSubmit}>
        <input name="company" placeholder="Company"   value={form.company}
 onChange={handleChange} required />
        <input name="role" placeholder="Role"   value={form.role}
 onChange={handleChange} required />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input type="date" name="date"  value={form.date}
 onChange={handleChange} required />
        <input name="link" placeholder="Job Link"  value={form.link}
 onChange={handleChange} />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
