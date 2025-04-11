import { useState } from "react";

const FilterBar = ({ onFilter }) => {
  const [status, setStatus] = useState("All");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(status, date);
  };

  return (
    <form className="filter-bar" onSubmit={handleSubmit}>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterBar;
