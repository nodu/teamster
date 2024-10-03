import React, { useState } from "react";
import axiosClient from "../api/axiosClient";
import { Link, useNavigate } from "react-router-dom";
import MemberForm from "./MemberForm";
import { Member } from "../types";

const AddMember: React.FC = () => {
  const [formData, setFormData] = useState<Member>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    role: "regular",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axiosClient
      .post("/members", formData)
      .then(() => {
        alert("Team member added successfully!");
        navigate("/");
      })
      .catch((error) => {
        alert("Failed to add member!");
        console.error("There was an error adding the member!", error);
      });
  };

  return (
    <>
      <Link to="/" className="pinned-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="main-grid-item-icon"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
          <line x1="9" x2="15" y1="9" y2="15" />
          <line x1="15" x2="9" y1="9" y2="15" />
        </svg>
      </Link>
      <h2>Add New Team Member</h2>
      <p>Set email, location and role.</p>
      <MemberForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
};

export default AddMember;
