import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Addjob = () => {
    // const navigate = useNavigate();
    const {user} = useAuth();
 const handleAddJon =(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const {min, max, currency, ...newJob} = initialData;
    console.log(newJob);
    newJob.salaryRange ={min,max, currency};
    newJob.requirements = newJob.requirements.split('\n');
    newJob.responsibilities = newJob.responsibilities.split('\n');
    console.log(newJob);
     
  
    fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newJob)
      })
        .then(res => res.json())
        .then(data => {
             if(data.insertedId){
                     Swal.fire({
                         position: "top-end",
                         icon: "success",
                         title: "Job has been added",
                         showConfirmButton: false,
                         timer: 1500
                       });
                       navigate('/myPostedJobs');
                    }
        })


   
  
 } 


    return (
        <div className="items-center border border-gray-500">
            <form onSubmit={handleAddJon} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name="title" placeholder="job title" className="input input-bordered ml-2" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name="job_location" placeholder="Location" className="input input-bordered ml-2" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select defaultValue='Pick a job type' className="select select-ghost w-full max-w-xs ml-2">
                        <option disabled>Pick a job type</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>Part-time</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select defaultValue='Pick a job Field' className="select select-ghost w-full max-w-xs ml-2">
                        <option disabled>Pick a job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>  
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Min</span>
                    </label>
                    <input type="text" name="min" placeholder="Min" className="input input-bordered ml-2" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Max</span>
                    </label>
                    <input type="text" name="max" placeholder="max" className="input input-bordered ml-2" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Currency</span>
                    </label>
                    <select defaultValue='Currency' name="currency" className="select select-ghost w-full max-w-xs ml-2">
                        <option disabled>Currency</option>
                        <option>BDT</option>
                        <option>USD</option>
                       
                    </select>  
                </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered ml-2" name="description" placeholder="Job Description" required ></textarea>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name="company" placeholder="Company name" className="input input-bordered ml-2" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered ml-2" name="requirements" placeholder="put each requirements in a new line" required ></textarea>


                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered ml-2" name="responsibilities" placeholder="write a responsibility in a in a new line" required ></textarea>


                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name="hr_name" placeholder="HR name" className="input input-bordered ml-2" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} name="hr_email" placeholder="HR Email" className="input input-bordered ml-2" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">application Deadline</span>
                    </label>
                    <input type="date" name="applicationDeadline" placeholder="Deadline" className="input input-bordered ml-2" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="text" name="company_logo" placeholder="Company Logo URL" className="input input-bordered ml-2" required />

                </div>

                <div className="form-control mt-6 ">
                    <button className="btn btn-primary w-full">submit</button>
                </div>
            </form>
        </div>
    );
};

export default Addjob;