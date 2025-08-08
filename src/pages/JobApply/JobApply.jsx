import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const JobApply = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const navigate = useNavigate();
    // console.log(id, user);

    const handleApply = (e) => {
        e.preventDefault();
        const from = e.target;
        const linkedin = from.linkedin.value;
        const github = from.github.value;
        const resume = from.resume.value;
        const hire = from.hire.value;
        // console.log(linkedin,github,resume,hire);
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume,
            hire,
        }
        fetch('http://localhost:3000/job-application',{
            method: 'POST',
            headers:{
                'content-Type': 'application/json'
            },
            body:JSON.stringify(jobApplication)

        })
        .then(res => res.json())
        .then(data=>{
           if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/myApplication')
           }
        })
    }
    return (

             
                <div className="card bg-base-100 w-full items-center shadow-2xl">
                <h1 className="text-5xl font-bold text-center">Apply Job And Good Luck!</h1>
                    <form onSubmit={handleApply}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LinkedIn URL</span>
                            </label>
                            <input type="url" name="linkedin" placeholder="LinkedIn URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github URL</span>
                            </label>
                            <input type="url" name="github" placeholder="Github URL" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume URL</span>
                            </label>
                            <input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Why hire you</span>
                            </label>
                            <input
                                type="text"
                                name="hire"
                                placeholder="Type here"
                                className="input input-bordered input-info w-full max-w-xs" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </form>
                </div>
           
    );
};

export default JobApply;