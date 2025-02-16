import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "./FirebaseConfig";

function Admin() {
  const [currentTab, setcurrentTab] = useState("enquiry");
  const [gettingEnquiries, setgettingEnquiries] = useState([]);

  async function gatheringEnquiries() {
    const appointmentDetails = await getDocs(
      collection(database, "customer_query")
    );
    let multipleArray = appointmentDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setgettingEnquiries(multipleArray);
    console.log(multipleArray);
  }

  useEffect(() => {
    gatheringEnquiries();
  }, []);

  return (
    <div>
      <div className="text-lg flex items-center justify-between py-6 w-64 px-10  font-semibold">
        <button
          className={`${
            currentTab === "enquiry" ? "text-[#e4b18c]" : "text-[#333333]"
          }`}
          onClick={() => {
            setcurrentTab("enquiry");
          }}
        >
          Enquiries
        </button>
        <button
          className={`${
            currentTab === "feedback" ? "text-[#e4b18c]" : "text-[#333333]"
          }`}
          onClick={() => {
            setcurrentTab("feedback");
          }}
        >
          Feedback
        </button>
      </div>

      <div className="px-10">
        {gettingEnquiries.map((enq) => (
          <div className="shadow border text-[#333333] p-3 rounded-xl border-gray-300">
            <p className="text-xl font-bold">{enq.firmName}</p>
            <div className="flex items-center">
              <p>{enq.email}</p>
              <p className="ml-4">{enq.phoneNo}</p>
            </div>
            <div>
              <p className="font-semibold mt-2">Message:</p>
              <p>{enq.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
