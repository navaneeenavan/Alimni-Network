import React, { useState, useEffect, useContext } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { fetchUpdateUser, fetchUserByEmail } from "../../API/call";
import TextInput from "./Components/TextInput";
import Dropdown from "./Components/Dropdown";
import colleges from "./CollegeList";
import departments from "./DepartmentList";
// import { toast } from "react-hot-toast";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

import Select from "react-select";

const PSG_COLLEGE =
  "PSG College of Technology (Autonomous), Peelamedu, Coimbatore District 641004";

const RegisterPageDetails = ({ switchPage }) => {
  const [authEmail, setAuthEmail] = useState("");
  const [otherCollege, setOtherCollege] = useState("");
  const [otherDept, setOtherDept] = useState("");

  const [isOther, setIsOther] = useState(false);
  const [isOtherDept, setIsOtherDept] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    rollno: "",
    countryCode : "",
    state: "",
    zipcode : "",
    address1: "",
    address2: "",
    address3: "",
    courseType : "",
    batchYear : "",
    completionYear : "",
    department: "",
    year: "",
    phone: "",
  });
  

  const selectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: "2px solid #E5E7EB",
      borderRadius: "0.5rem",
      padding: "0.25rem 0.5rem",
    }),
  };

  const handleCollegeChange = (e) => {
    setFormData({ ...formData, college: e.value });
  };

  const handleDeptChange = (e) => {
    setFormData({ ...formData, department: e.value });
  };

  return (
    <div className="w-full h-full overflow-y-scroll lg:overflow-y-hidden flex flex-col lg:h-fit lg:max-h-[90%] py-12 px-6 lg:pt-8 lg:pb-0 lg:px-0 shadow-xl bg-white space-y-6">
      <div className="flex w-full justify-center lg:hidden items-center">
        <img
          src="/assets/Logo/Kriya_KLA_Logo_Final.png"
          alt="Kriya black"
          className="lg:hidden h-24 w-auto opacity-70"
        />
      </div>
      <button
        // onClick={() => navigate(-2)}
        className="flex hover:cursor-pointer group text-sm items-center space-x-2 lg:px-8"
      >
        <MdOutlineArrowBackIosNew size={12} />
        <p className="group-hover:underline">Back</p>
      </button>
      <div className="lg:px-8">
        <h3 className="text-sm text-gray-500">Register for Alumni Id</h3>
        <h1 className="text-2xl font-bold text-[#181818]">
          Enter your personal details
        </h1>
      </div>
      <div className="h-fit lg:h-full space-y-6 lg:overflow-auto lg:flex-1 pb-12 lg:px-8">
        <TextInput
          title="DOB"
          type="date"
          isDisabled={formData.source === "google"}
          className="w-full"
          valueState={[
            formData.email,
            (val) => setFormData({ ...formData, email: val }),
          ]}
        />
        <div>
          <TextInput
            title="Name"
            className="w-full"
            valueState={[
              formData.name,
              (val) => setFormData({ ...formData, name: val }),
            ]}
          />
          <p className="text-xs pl-4 pt-1">*as per your college ID</p>
        </div>
        <TextInput
          title="Roll-No"
          type="text"
          isDisabled={formData.source === "google"}
          className="w-full"
          valueState={[
            formData.rollno,
            (val) => setFormData({ ...formData, rollno: val }),
          ]}
        />
        <TextInput
          title="Email"
          type="email"
          isDisabled={formData.source === "google"}
          className="w-full"
          valueState={[
            formData.email,
            (val) => setFormData({ ...formData, email: val }),
          ]}
        />
        <div className="flex flex-col lg:flex-row  space-y-5  lg:space-x-5 w-full lg:items-baseline">
          <TextInput
            title="Country Code"
            className="sm:w-full "
            valueState={[
              formData.countryCode,
              (val) => setFormData({ ...formData, countryCode: val }),
            ]}
          />
          <TextInput
            title="Phone number"
            className="w-full"
            valueState={[
              formData.phone,
              (val) => setFormData({ ...formData, phone: val }),
            ]}
          />

          <TextInput
            title="State"
            className="sm:w-full w-fit"
            valueState={[
              formData.state,
              (val) => setFormData({ ...formData, state: val }),
            ]}
          />

          <TextInput
            title="Zip-Code"
            className="sm:w-full w-fit"
            valueState={[
              formData.zipcode,
              (val) => setFormData({ ...formData, zipcode: val }),
            ]}
          />
        </div>

        <div className="flex lg:flex-row flex-col space-y-5 lg:space-x-5 w-full lg:items-baseline">
          <TextInput
            title="Address Line 1 "
            className="w-full"
            valueState={[
              formData.address1,
              (val) => setFormData({ ...formData, address1: val }),
            ]}
          />
          <TextInput
            title="Address Line 2"
            className="w-full"
            valueState={[
              formData.address2,
              (val) => setFormData({ ...formData, address2: val }),
            ]}
          />
          <TextInput
            title="Address Line 3"
            className="w-full"
            valueState={[
              formData.address3,
              (val) => setFormData({ ...formData, address3: val }),
            ]}
          />
        </div>
        

        
        {formData.college === "Other" && (
          <TextInput
            title="College/University Name"
            placeholder="Enter your college/university name"
            className=""
            valueState={[otherCollege, setOtherCollege]}
          />
        )}
        {formData.college !== PSG_COLLEGE && (
          <Dropdown
            valueState={[
              formData.courseType,
              (val) => setFormData({ ...formData, courseType: val }),
            ]}
            title="Course Type"
            className=""
            placeholder="Select an option"
            options={["BE", "BTECH","POLYTECHNIC", "MSC"]}
          />
        )}
         <div className="flex space-x-5 w-full">
          <TextInput
            title="Batch Year "
            className="w-full"
            valueState={[
              formData.batchYear,
              (val) => setFormData({ ...formData, batchYear: val }),
            ]}
          />
          <TextInput
            title="Completion Year"
            className="w-full"
            valueState={[
              formData.completionYear,
              (val) => setFormData({ ...formData, completionYear: val }),
            ]}
          />
          
        </div>
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-2 w-full">
          <div className="flex flex-col lg:flex-row items-baseline lg:items-center w-full lg:w-2/3">
            <div className="w-full">
              <label className="text-blue text-sm z-30 bg-white p-2">
                Department
              </label>
              <Select
                styles={selectStyles}
                className="z-20 flex-1"
                options={departments.map((dept) => ({
                  value: dept,
                  label: dept,
                }))}
                isDisabled={isOtherDept}
                onChange={handleDeptChange}
              />
              
            </div>
            {formData.department === "Other" && (
              <TextInput
                title="Department Name"
                placeholder="Enter your department name"
                className="pt-2"
                valueState={[otherDept, setOtherDept]}
              />
            )}
          </div>
         
        </div>
      </div>
      <div className="w-full py-4 lg:py-8 px-8  space-y-4">
        <div className="flex space-x-3">
        <p>All the information provided are true I agree it by Submiting </p>
        <input type="checkbox"></input>        
        </div>
        <div className="flex flex-col lg:flex-row items-baseline space-y-6 lg:space-y-0 lg:space-x-2 w-full">
          <button
            // onClick={handleBack}
            className="border-2 border-black bg-white hover:bg-gray-700 hover:text-white transition-all duration-500 text-black text-lg rounded-lg py-2 px-4 w-full lg:w-1/2"
          >
            Back
          </button>
          <button
            // onClick={handleContinue}
            className="border-2 border-black bg-black hover:bg-gray-700 transition-all duration-500 text-white text-lg rounded-lg py-2  px-4 w-full lg:w-1/2"
          >
            Continue
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default RegisterPageDetails;
