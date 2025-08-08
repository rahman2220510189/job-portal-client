import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
    const applications = useLoaderData();
    const handleSubmitUpdate = (e, id) => {
        console.log(e.target.value, id)
        const data = {
            status: e.target.value
        }
        fetch(`http://localhost:3000/job-application/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                   
                }
                ;
            })
    }
    return (
        <div>
            <h2 className="text-3xl">
                Application for this job: {applications.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                           <th>Count</th>
                            <th>Email</th>
                            
                            <th> status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td>{app.applicant_email}</td>
                             
                              
                               
                                <td>
                                    <select
                                        onChange={(e) => handleSubmitUpdate(e, app._id)}
                                        defaultValue={app.status || 'Change Status'}
                                        className="select select-bordered select-xs w-full max-w-xs">
                                        <option disabled selected>Change status</option>
                                        <option>Under Review</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default ViewApplication;