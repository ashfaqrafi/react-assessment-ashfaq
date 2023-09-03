import React from "react";
import { useState } from "react";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        setname("");
        setemail("");
        setphone("");
        setdesc("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  };
  return (
    <div className="main-body roboto">
      <div className="w-full sm:w-10/12 md:8/12 lg:w-7/12 mx-auto">
        <div className="card">
          <div className="secondary-heading text-center pt-[20px]">Contact US</div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="px-[5px] sm:px-[20px] my-[30px] primary-pargraph"
            >
              <div className="mb-[25px] ">
                <label htmlFor="name" className="w-full font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full"
                  id="name"
                  aria-describedby="emailHelp"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-[25px]">
                <label htmlFor="email" className="w-full font-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full"
                  id="email"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <div
                  id="emailHelp"
                  className="text-sm mt-[10px] font-semibold text-gray-600"
                >
                  We will never share your email with anyone else.
                </div>
              </div>
              <div className="mb-[25px]">
                <label htmlFor="phone" className="w-full font-semibold">
                  Number
                </label>
                <input
                  type="number"
                  name="phone"
                  className="w-full"
                  id="phone"
                  aria-describedby="emailHelp"
                  value={phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-[25px]">
                <label htmlFor="desc" className="w-full font-semibold">
                  Elaborate your concern
                </label>
                <textarea
                  className="w-full border-[1px] shadow-md px-[10px] py-[6px] shadow-gray-300 rounded-[4px] mt-[10px] focus:outline-none"
                  id="desc"
                  name="desc"
                  rows="4"
                  value={desc}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="primary-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
