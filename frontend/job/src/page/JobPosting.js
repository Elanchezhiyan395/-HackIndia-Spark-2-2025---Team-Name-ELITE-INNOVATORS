import React, { useState } from "react";

const JobPosting = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    skills: "",
    budget: "",
    deadline: "",
    engagement: "hourly",
    urgent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setJob({
      ...job,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", job);
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Job Title" onChange={handleChange} />
        <textarea name="description" placeholder="Job Description" onChange={handleChange}></textarea>
        <input name="skills" placeholder="Required Skills" onChange={handleChange} />
        <input name="budget" type="number" placeholder="Budget" onChange={handleChange} />
        <input name="deadline" type="date" onChange={handleChange} />
        <select name="engagement" onChange={handleChange}>
          <option value="hourly">Hourly</option>
          <option value="fixed">Fixed Price</option>
        </select>
        <label>
          <input type="checkbox" name="urgent" onChange={handleChange} />
          Mark as Urgent
        </label>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobPosting;
