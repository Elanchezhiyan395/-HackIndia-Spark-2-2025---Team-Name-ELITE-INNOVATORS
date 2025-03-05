import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Welcome to Mindlancer</h1>
      <nav>
        <Link to="/post-job">Post a Job</Link>
        <Link to="/search-jobs">Search Jobs</Link>
      </nav>
    </div>
  );
};

export default App;
