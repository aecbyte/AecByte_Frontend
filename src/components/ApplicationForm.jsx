import { useState } from "react";
import { FaUser, FaCalendar, FaPhone, FaEnvelope, FaClock, FaBuilding, FaMapMarkerAlt, FaUpload, FaBriefcase, FaGraduationCap, FaTools } from "react-icons/fa";
import JobHeader from "./JobHeader";
import Navbar from "./Navbar";
import { useNavigate, useParams } from 'react-router-dom';


const ApplicationForm = ()  => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("personal");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    mobile: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    experience: "",
    jobRole: "",
    jobDescription: "",
    education: "",
    degree: "",
    institution: "",
    graduationYear: "",
    skills: "",
    resume: null,
    coverLetter: null,
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = "This field is required";
    } else {
      switch (name) {
        case "firstName":
          const firstNameRegex = /^[a-zA-Z ]{2,30}$/;
          if (!firstNameRegex.test(value)) error = "Invalid input";
          break;
        case "lastName":
          const lastNameRegex = /^[a-zA-Z ]{2,30}$/;
          if (!lastNameRegex.test(value)) error = "Invalid input";
          break;
        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) error = "Invalid email format";
          break;
        case "mobile":
          const phoneRegex = /^\d{10}$/;
          if (!phoneRegex.test(value)) error = "Invalid phone number";
          break;
        case "zip":
          if (!/^[0-9]{5,6}$/.test(value)) error = "Invalid zip code";
          break;
        case "endDate":
            if (value < startDate.value) error = "End date should be after start date";
            break;
        // case "graduationYear":
        //   if (!/^(19|20)\d{2}$/.test(value)) error = "Invalid year format";
        //   break;
        default:
          break;
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const fieldValue = type === "file" ? files[0] : value;
    setFormData({ ...formData, [name]: fieldValue });
    setErrors({ ...errors, [name]: validateField(name, fieldValue) });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // // const response = await fetch('https://script.google.com/macros/s/AKfycbzXtGenFIfrfENfRrwwXgFV2uGNKBC4KGiJGSs_Y7k8qq7MFcLwYYYawZRADwzCT38/exec', {
      // //     method: 'POST',
      // //     headers: { 'Content-Type': 'application/json' },
      // //     body: JSON.stringify(formData),
      // //     mode: 'no-cors'
      // });
  } catch (error) {
      console.error('Error:', error);
    }
    navigate(`/ApplicationSubmittedSuccessfully/${id}`);
  };

  // const handleNext = () => {
  //   const tabs = ["personal", "experience", "education", "skills"];
  //   const currentIndex = tabs.indexOf(activeTab);
  //   if (currentIndex < tabs.length - 1) {
  //     setActiveTab(tabs[currentIndex + 1]);
  //   }
  // };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const tabs = ["personal", "experience", "education", "skills"];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  }

  const calculateProgress = () => {
    const filledFields = Object.values(formData).filter(value => value && value !== "").length;
    const totalFields = Object.keys(formData).length;
    return Math.round((filledFields / totalFields) * 100);
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-6xl bg-white p-6 shadow-lg rounded-xl">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Profile</h2>
        <p className="text-sm text-gray-500">Progress: <span className="text-green-500 font-medium">{calculateProgress()}% Complete</span></p>

        <div className="hidden md:flex mt-4 border-b pb-2 text-gray-600">
          <span className={`pb-1  ${activeTab === "personal" ? "font-semibold border-b-2 border-purple-500" : ""}`} >Personal</span>
          <span className={`ml-4  ${activeTab === "experience" ? "font-semibold border-b-2 border-purple-500" : ""}`} >Experience</span>
          <span className={`ml-4 ${activeTab === "education" ? "font-semibold border-b-2 border-purple-500" : ""}`} >Education</span>
          <span className={`ml-4  ${activeTab === "skills" ? "font-semibold border-b-2 border-purple-500" : ""}`}>Skills</span>
        </div>

        {activeTab === "personal" && (
          <form onSubmit={handleSubmit1} className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative col-span-2 md:col-span-1">
              <FaUser className="absolute left-3 top-4 text-gray-500" />
              <input type="text" name="firstName" placeholder="First Name *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <FaUser className="absolute left-3 top-4 text-gray-500" />
              <input type="text" name="lastName" placeholder="Last Name *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
            <div className="relative col-span-2">
            <label className="text-gray-500">Date of birth *</label>
              <FaCalendar className="absolute left-3 top-10 text-gray-500" />
              <input type="date" name="dob" placeholder="Date of Birth *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
            </div>
            <div className="relative col-span-2">
              <FaEnvelope className="absolute left-3 top-4 text-gray-500" />
              <input type="email" name="email" placeholder="Email *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="relative col-span-2">
              <FaPhone className="absolute left-3 top-4 text-gray-500" />
              <input type="tel" name="mobile" placeholder="Phone Number *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-500" />
              <input type="text" name="street" placeholder="Street Address *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-500" />
              <input type="text" name="city" placeholder="City *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-500" />
              <input type="text" name="state" placeholder="State *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-500" />
              <input type="text" name="zip" placeholder="Zip Code *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
            </div>
            <div className="relative col-span-2">
              <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-500" />
              <input type="text" name="country" placeholder="Country *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>
            <div className="relative col-span-2">
              <FaUpload className="absolute left-3 top-4 text-gray-500" />
              <input type="file" name="resume" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
              <label className="text-sm text-gray-500">Upload Resume *</label>
              {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
            </div>
            <div className="relative col-span-2">
              <FaUpload className="absolute left-3 top-4 text-gray-500" />
              <input type="file" name="coverLetter" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
              <label className="text-sm text-gray-500">Upload Cover Letter *</label>
              {errors.cover && <p className="text-red-500 text-sm">{errors.cover}</p>}
            </div>
            <div className="relative col-span-2">
              <FaUpload className="absolute left-3 top-4 text-gray-500" />
              <input type="file" name="photograph" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
              <label className="text-sm text-gray-500">Upload Photograph *</label>
              {errors.photograph && <p className="text-red-500 text-sm">{errors.photograph}</p>}
            </div>
            <div className="mt-6 flex col-span-2 justify-end">
          <button type="Submit" className="px-6 py-3 cursor-pointer bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700">Save & Next</button>
        </div> 
          </form>
        )}

{activeTab === "experience" && (
          <form onSubmit={handleSubmit1} className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative col-span-2">
              <FaClock className="absolute left-3 top-4 text-gray-500" />
              <input type="number" name="experienceYears" placeholder="Years of Experience *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <FaBriefcase className="absolute left-3 top-4 text-gray-500" />
              <input type="text" name="jobRole" placeholder="Previous Job Title *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.prevJobTitle && <p className="text-red-500 text-sm">{errors.prevJobTitle}</p>}
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <FaBuilding className="absolute left-3 top-4 text-gray-500" />
              <input type="text" name="companyName" placeholder="Company Name *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
            </div>
            <div className="relative col-span-2">
              <textarea name="jobDescription" placeholder="Job Responsibilities *" onChange={handleChange} required
                className="w-full p-3 border resize-none border-gray-300 rounded-lg bg-gray-100"></textarea>
                {errors.jobDescription && <p className="text-red-500 text-sm">{errors.jobDescription}</p>}
            </div>
            <div className="relative col-span-2 md:col-span-1">
            <label className="text-gray-500">Start Date *</label>
              <FaCalendar className="absolute left-3 top-10 text-gray-500" />
              <input type="date" name="startDate" placeholder="Start Date *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
            </div>
            <div className="relative col-span-2 md:col-span-1">
            <label className="text-gray-500">End Date *</label>
              <FaCalendar className="absolute left-3 top-10 text-gray-500" />
              <input type="date" name="endDate" placeholder="End Date *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
                {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
            </div>
            <div className="mt-6 flex col-span-2 justify-end">
          <button type="Submit" className="px-6 py-3 cursor-pointer bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700">Save & Next</button>
        </div> 
          </form>
        )}

{activeTab === "education" && (
          <form onSubmit={handleSubmit1} className="grid grid-cols-2 gap-4 mt-4">
            <div className="relative col-span-2 md:col-span-1">
              <FaGraduationCap className="absolute left-3 top-4 text-gray-500" />
              <input type="text" name="degree" placeholder="Degree *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <FaBuilding className="absolute left-3 top-4 text-gray-500" />
              <input type="text" name="institution" placeholder="Institution *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
            </div>
            <div className="relative col-span-2">
              <FaCalendar className="absolute left-3 top-4 text-gray-500" />
              <input type="number" name="graduationYear" placeholder="Graduation Year *" onChange={handleChange} required
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg bg-gray-100" />
            </div>
            <div className="mt-6 flex col-span-2 justify-end">
          <button type="Submit" className="px-6 py-3 cursor-pointer bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700">Save & Next</button>
        </div> 
          </form>
        )}

        {activeTab === "skills" && (
          <form onSubmit={handleSubmit1} className="grid grid-cols-1 gap-4 mt-4">
            <div className="relative col-span-2 md:col-span-1">
              <FaTools className="absolute left-3 top-4 text-gray-500" />
              <textarea name="skills" placeholder="List your technical skills *" onChange={handleChange} required
                className="w-full pl-10 p-3 border resize-none border-gray-300 rounded-lg bg-gray-100"></textarea>
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <FaTools className="absolute left-3 top-4 text-gray-500" />
              <textarea name="skills" placeholder="List your soft skills *" onChange={handleChange} required
                className="w-full pl-10 resize-none p-3 border border-gray-300 rounded-lg bg-gray-100"></textarea>
            </div>
            <div className="mt-6 flex justify-end">
          <button className="px-6 py-3 cursor-pointer bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700">Submit</button>
        </div> 

          </form>
        )}
      </div>
    </div>
    </>
  );
}

export default ApplicationForm;
