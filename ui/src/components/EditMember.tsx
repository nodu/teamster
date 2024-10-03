import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import { Link, useNavigate, useParams } from "react-router-dom";
import MemberForm from "./MemberForm";
import { Member } from "../types";

const EditMember: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<Member>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    role: "regular",
  });

  // TODO: Add navigation block for better UX or automatically save on debounced input changes
  // const [isFormTouched, setFormTouched] = useState(false);

  const navigate = useNavigate();
  // const blocker = useBlocker(
  //   ({ currentLocation, nextLocation }) =>
  //     isFormTouched && currentLocation.pathname !== nextLocation.pathname,
  // );

  useEffect(() => {
    axiosClient
      .get(`/members/${id}`)
      .then((response) => setFormData(response.data))
      .catch((error) => {
        alert("Failed to fetch member details!");
        console.error("Error fetching member:", error);
      });
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFormTouched(true);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axiosClient
      .put(`/members/${id}`, formData)
      .then(() => {
        alert("Team member updated successfully!");
        // setFormTouched(false);
        navigate("/");
      })
      .catch((error) => {
        alert("Failed to update member!");
        console.error("There was an error updating the member!", error);
      });
  };

  const deleteMember = (e: React.UIEvent) => {
    e.preventDefault();
    axiosClient
      .delete(`/members/${id}`)
      .then(() => {
        // setFormTouched(false);
        alert("Team member deleted successfully!");
        navigate("/");
      })
      .catch((error) => {
        alert("Failed to delete member!");
        console.error("There was an error!", error);
      });
  };

  return (
    <>
      {/* {blocker.state === "blocked" ? ( */}
      {/*   <div> */}
      {/*     <p>Are you sure you want to leave?</p> */}
      {/*     <button onClick={() => blocker.proceed()}>Proceed</button> */}
      {/*     <button onClick={() => blocker.reset()}>Cancel</button> */}
      {/*   </div> */}
      {/* ) : null} */}
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
      <h2>Edit Team Member</h2>
      <p>Edit contact info, location and role.</p>
      <MemberForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        deleteMember={deleteMember}
      />
    </>
  );
};

export default EditMember;
