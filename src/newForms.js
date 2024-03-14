function NewForms() {
    return (
      <div className="max-w-md mx-auto">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="dob"
                id="dob"
                className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="dob"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                Date of Birth
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="roll_no"
                id="roll_no"
                className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="roll_no"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                Roll Number
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <select
                name="dep"
                id="dep"
                className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                required
              >
                <option value="" disabled selected>Select Department</option>
                {/* Add department options here */}
              </select>
              <label
                htmlFor="dep"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                Department
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <select
                name="course_type"
                id="course_type"
                className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                required
              >
                <option value="" disabled selected>Select Course Type</option>
                <option value="BE">BE</option>
                <option value="BTECH">BTECH</option>
              </select>
              <label
                htmlFor="course_type"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                Course Type
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="batch_year"
                id="batch_year"
                className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="batch_year"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                Batch Year
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="completion_year"
                id="completion_year"
                className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="completion_year"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                Completion Year
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="address_1"
                  id="address_1"
                  className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="address_1"
                  className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
                >
                  Address 1
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="address_2"
                  id="address_2"
                  className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="address_2"
                  className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
                >
                  Address 2
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="address_3"
                  id="address_3"
                  className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="address_3"
                  className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
                >
                  Address 3
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="pincode"
                id="pincode"
                className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="pincode"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                Pincode
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="state"
                id="state"
                className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="state"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                State
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="country"
                id="country"
                className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="country"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                Country
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <div className="flex items-center">
                <input
                  type="text"
                  name="country_code"
                  id="country_code"
                  className="block w-1/3 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                <span className="ml-2 text-sm text-gray-500">-</span>
                <input
                  type="text"
                  name="mobile_number"
                  id="mobile_number"
                  className="block w-2/3 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
              </div>
              <label
                htmlFor="country_code"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                Country Code - Mobile Number
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <select
                name="status"
                id="status"
                className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
                required
              >
                <option value="" disabled selected>Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <label
                htmlFor="status"
                className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 origin-0 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:text-blue-600 peer-focus:-translate-y-6"
              >
                Status
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-white w-full px-5 py-2.5"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default NewForms;
  