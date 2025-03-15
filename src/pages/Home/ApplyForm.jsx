import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";


const ApplyForm = () => {

    const {user} = useContext(AuthContext)
    const {id} = useParams()
    const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Create FormData from the form
    const formData = new FormData(form);

    const formObject = Object.fromEntries(formData.entries());
    console.log("Form Data Object:", formObject);

    const formObjectData = {...formObject, id: id}

    fetch('http://localhost:5000/api/v1/job-applications', {
        method: "POST",
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(formObjectData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged=== true){
            Swal.fire({
                title: "Apply successfully",
                icon: "success",
                draggable: true
              });
              navigate('/my-applications')
        }
    })
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg mb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Apply for the Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="w-full border p-2 rounded"
            value={user?.displayName}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border p-2 rounded"
            value={user?.email}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">LinkedIn Profile</label>
          <input
            type="url"
            name="linkedin"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Portfolio Website</label>
          <input
            type="url"
            name="portfolio"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Highest Level of Education</label>
          <input
            type="text"
            name="highestEducation"
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Certifications</label>
          <input
            type="text"
            name="certifications"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Resume (PDF/DOC)</label>
          <input
            type="file"
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
;