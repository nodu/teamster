import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import { Link } from "react-router-dom";
import { Member } from "../types";
import MemberCard from "./MemberCard";

const MemberList: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    axiosClient
      .get("/members")
      .then((response) => setMembers(response.data))
      .catch((error) => {
        alert("Failed to fetch members!");
        console.error("Error fetching members:", error);
      });
  }, []);

  return (
    <>
      <Link to="/add" className="pinned-item">
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
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" x2="20" y1="8" y2="14" />
          <line x1="23" x2="17" y1="11" y2="11" />
        </svg>
      </Link>

      <div>
        <h2>Team Members</h2>
        <p>You have {members.length} team members.</p>
        <div className="grid-container">
          {members.map((member, index) => (
            <MemberCard member={member} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MemberList;
