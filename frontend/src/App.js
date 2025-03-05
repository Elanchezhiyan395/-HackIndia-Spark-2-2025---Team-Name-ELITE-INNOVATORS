import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./UserManagement.css";

function App() {
  const { register, handleSubmit, reset } = useForm();
  const [userType, setUserType] = useState("freelancer");

  const onSubmit = (data) => {
    console.log("User Data Submitted:", data);
    reset();
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to React!</h1>
      <h2 className="title">User Signup</h2>
      <div className="select-box">
        <label>Select User Type:</label>
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="freelancer">Freelancer</option>
          <option value="business">Business</option>
        </select>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input {...register("email", { required: true })} type="email" placeholder="Email" />
        <input {...register("password", { required: true })} type="password" placeholder="Password" />
        
        {userType === "freelancer" && (
          <>
            <input {...register("skills")} type="text" placeholder="Skills" />
            <input {...register("portfolio")} type="text" placeholder="Portfolio URL" />
            <input {...register("hourlyRate")} type="number" placeholder="Hourly Rate" />
          </>
        )}
        
        {userType === "business" && (
          <>
            <input {...register("companyName")} type="text" placeholder="Company Name" />
            <input {...register("industry")} type="text" placeholder="Industry" />
            <input {...register("website")} type="url" placeholder="Website" />
          </>
        )}

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default App;
