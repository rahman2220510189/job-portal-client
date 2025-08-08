import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const HotJobCard = ({job}) => {
    const { _id,title, company, company_logo, requirements, description, location, SalaryRange } = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
           <div className="flex gap-2 m-2">
           <figure>
                <img className="w-14"
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div>
                <h4 className="text-2xl"> {company}</h4>
                <p className="flex gap-1 items-center"><FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                   


                
                
            </div>
           </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                <div className="badge badge-secondary">NEW</div>
                </h2>
             
                <p>{description}</p>
                <div className="flex gap-1 flex-wrap">
                    {
                        requirements.map((skill, index) => <p key={index}
                        className="border rounded-sm text-center p-1 hover:text-blue-600 bg-slate-300">{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end items-center">
              
                    <p className="text-sm font-semibold text-green-600">
        ৳ {job.salaryRange.min.toLocaleString()} BDT - ৳ {job.salaryRange.max.toLocaleString()} BDT
      </p>
                
               <Link to={`/jobs/${_id}`}>
               <button className="btn btn-primary">Apply</button>
               </Link>
                </div>
            </div>
        </div>

    );
};

export default HotJobCard;