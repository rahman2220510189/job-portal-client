


import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {_id,title,description, company,deadline,company_logo,location, status, hr_email, hr_name, responsibilities}= useLoaderData();

    return (
       
       <div className='m-10 '>
          <figure>
                <img className="w-14"
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            <div> <p className="flex gap-1 items-center text-green-500"><FaMapMarkerAlt className='text-blue-500'></FaMapMarkerAlt> {location}</p></div>
             
          
          <h2 className='text-3xl font-semibold'>job details for: {title}</h2>
            <p className='text-1xt mt-2 mb-2'>Apply for: {company}</p>
            <p className='mb-2'>Description: {description}</p>
          <div className='flex flex-wrap gap-2 mb-2'>
          {
            responsibilities.map((atik, still) => <p className='border rounded-sm bg-red-400 p-1' key={still}>{atik}</p>)
          }
          </div>
         <div className=''>
         <p>deadline: {deadline}</p>
            <h5>Status: {status}</h5>
            <h6>HR Email: {hr_email}</h6>
            <h6>HR Name: {hr_name}</h6>
         </div>

       <Link to = {`/jobApply/${_id}`}>
       <button className='btn btn-primary mt-2 p-2'>Apply Now</button>
       </Link>
            
       </div>

  
    );
};

export default JobDetails;