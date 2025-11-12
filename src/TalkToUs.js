import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { database } from "./FirebaseConfig";



function TalkToUs({ setopeningTalkToUs }) {
  const [firmName, setFirmName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firmName || !phoneNo || !email || !message) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const docRef = await addDoc(collection(database, "customer_query"), {
        firmName,
        phoneNo,
        email,
        message,
        timestamp: new Date(), 
      });

      console.log("Document written with ID: ", docRef.id);

      setopeningTalkToUs(false);
      alert("Your query has been submitted!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("There was an error submitting your query.");
    }
  };

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white w-80 sm:w-96 p-5 rounded shadow-xl z-50 font-semibold font-dmSans">
        <div className="flex items-center mb-4 justify-between">
          <div className="flex justify-center items-start">
            <p className="text-[#333333] text-xl sm:text-3xl font-bold">
              Talk to
            </p>
            <p className="text-[#e4b18c] ml-2 text-lg sm:text-3xl font-bold">
              us
            </p>
          </div>

          <button
            onClick={() => setopeningTalkToUs(false)}
            className="text-red-500 font-bold"
          >
            Close
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="w-full">
            <p>Your Firm's Name</p>
            <input
              value={firmName}
              onChange={(e) => setFirmName(e.target.value)}
              placeholder="mini minds"
              className="border w-full border-gray-300 p-2 rounded"
            />
          </div>

          <div className="grid my-4 grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="">
              <p>Phone No</p>
              <input
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="+91 1234567890"
                className="border w-full border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <p>Email</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@gmail.com"
                className="border w-full border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div>
            <p>Message for us</p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write us a message...."
              className="border h-28 w-full border-gray-300 p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-[#333333] text-white font-semibold font-dmSans px-5 py-1.5 rounded w-full mt-4"
          >
            Submit your Query
          </button>
        </form>
      </div>
    </div>
  );
}

export default TalkToUs;
