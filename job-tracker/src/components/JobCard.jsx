import { useState } from "react";

const JobCard = ({ job, onDelete, onUpdateStatus }) => {
  const [editing, setEditing] = useState(false);
  const [newStatus, setNewStatus] = useState(job.status);

  const handleUpdate = () => {
    onUpdateStatus(job._id, newStatus);
    setEditing(false);
  };

  return (
    <div className="job-card">
      <h3>{job.role} @ {job.company}</h3>
      <p><strong>Status:</strong> {job.status}</p>
      <p><strong>Date:</strong> {job.date}</p>
      <p><a href={job.link} target="_blank" rel="noopener noreferrer">Job Link</a></p>

      <div className="job-actions">
        {editing ? (
          <>
            <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setEditing(true)}>Edit Status</button>
            <button onClick={() => onDelete(job._id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default JobCard;
