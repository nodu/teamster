import { Link } from "react-router-dom";
import { Member } from "../types";

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="grid-item" style={{ textDecoration: "none !important" }}>
      <Link to={`/edit/${member.id}`}>
        <div>
          {member.first_name} {member.last_name}
          {member.role === "admin" ? ` (${member.role})` : ""}
          <br />
          {member.phone}
          <br />
          {member.email}
        </div>
      </Link>
    </div>
  );
}

export default MemberCard;
