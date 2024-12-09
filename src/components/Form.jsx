// import { useState } from "react";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     dob: "",
//     email: "",
//     phone: "",
//     gender: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//     // Reset form after submission
//     setFormData({
//       name: "",
//       age: "",
//       dob: "",
//       email: "",
//       phone: "",
//       gender: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="flex justify-center items-center text-black mb-[50px]">
//       <form
//         action="https://formspree.io/f/mqazzlvk"
//         method="POST"
//         onSubmit={handleSubmit}
//         className="bg-slate-100 bg-opacity-5 p-8 rounded-lg shadow-lg w-[600px] transition-transform transform"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-amber-50">
//           Contact Form
//         </h2>

//         <div className="mb-4 text-amber-50">
//           <label className="block text-sm font-medium mb-1" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="text-amber-50 block text-sm font-medium mb-1"
//             htmlFor="age"
//           >
//             Age
//           </label>
//           <input
//             type="number"
//             name="age"
//             id="age"
//             value={formData.age}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//           />
//         </div>

//         {/* <div className="mb-4">
//           <label className="block text-sm font-medium mb-1" htmlFor="dob">
//             Date of Birth
//           </label>
//           <input
//             type="date"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//           />
//         </div> */}

//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium mb-1 text-amber-50"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium mb-1"
//             htmlFor="phone text-amber-50"
//           >
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             name="phone"
//             id="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1 text-amber-50">
//             Gender
//           </label>
//           <select
//             name="gender"
//             id="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label
//             className=" block text-sm font-medium mb-1 text-amber-50"
//             htmlFor="message"
//           >
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 text-white lg:w-[535px]"
//           />
//         </div>
//         <div>
//           <input
//             type="submit"
//             value="Submit"
//             className="bg-black text-white px-[20px] py-[5px] font-bold rounded-md flex mx-auto"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;

//New New
// import { useState } from "react";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     dob: "",
//     email: "",
//     phone: "",
//     gender: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//     // Reset form after submission
//     setFormData({
//       name: "",
//       age: "",
//       dob: "",
//       email: "",
//       phone: "",
//       gender: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="flex justify-center items-center text-black mb-[50px]">
//       <form
//         action="https://formspree.io/f/mqazzlvk"
//         method="POST"
//         onSubmit={handleSubmit}
//         className="bg-slate-100 bg-opacity-5 p-8 rounded-lg shadow-lg w-[600px] transition-transform transform"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-amber-50">
//           Contact Form
//         </h2>

//         <div className="mb-4 text-amber-50">
//           <label className="block text-sm font-medium mb-1" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//             aria-label="Name"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="text-amber-50 block text-sm font-medium mb-1"
//             htmlFor="age"
//           >
//             Age
//           </label>
//           <input
//             type="number"
//             name="age"
//             id="age"
//             value={formData.age}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//             aria-label="Age"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1" htmlFor="dob">
//             Date of Birth
//           </label>
//           <input
//             type="date"
//             name="dob"
//             id="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//             aria-label="Date of Birth"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium mb-1 text-amber-50"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//             aria-label="Email"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium mb-1 text-amber-50"
//             htmlFor="phone"
//           >
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             name="phone"
//             id="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//             aria-label="Phone Number"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1 text-amber-50">
//             Gender
//           </label>
//           <select
//             name="gender"
//             id="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
//             aria-label="Gender"
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium mb-1 text-amber-50"
//             htmlFor="message"
//           >
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 rounded-md p-2 text-white lg:w-[535px]"
//             aria-label="Message"
//           />
//         </div>
//         <div>
//           <input
//             type="submit"
//             value="Submit"
//             className="bg-black text-white px-[20px] py-[5px] font-bold rounded-md flex mx-auto"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;

//New - 2
import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
        "https://formspree.io/f/mqazzlvk",
        formData
      );
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="lg:w-[1000px] mx-auto text-white bg-amber-100 bg-opacity-5 border-[1px] border-amber-100 mb-[50px] p-[30px]">
      <h2 className="text-center text-[30px] font-semibold">
        Send Your Message
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[10px] mb-[10px]">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-slate-100 bg-opacity-5 px-4 py-1"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-[10px] mb-[10px]">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="test@email.com"
            className="bg-slate-100 bg-opacity-5 px-4 py-1"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-[10px] mb-[10px]">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            className="bg-slate-100 h-[100px] bg-opacity-10 p-[20px]"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className=" mx-auto flex bg-amber-100 text-green-500 bg-opacity-5 px-5 py-1 rounded-md border-[1px] border-green-500 mt-[25px]  "
        >
          Send Message
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default Form;
