import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
    const [jobs, setJobs] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))

    },[user.email])
    return (
        <div>
            <h2> my posted job: {jobs.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>Application Count</th>
        <th>View application</th>
      </tr>
    </thead>
    <tbody>
     {
        jobs.map((job, index) =>  <tr>
            <th>{index +1}</th>
            <td>{job.title}</td>
            <td>{job.applicationDeadline}</td>
            <td>{job.applicationCount}</td>
            <td>
            <Link to={`/viewApplication/${job._id}`}>
            <button className="btn btn-link">view Applications</button>

            </Link>

                
            </td>
          </tr>)
     }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJob;