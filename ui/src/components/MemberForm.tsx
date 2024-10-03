import { MemberFormProps } from "../types";

const MemberForm: React.FC<MemberFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  deleteMember,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Info</h3>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            placeholder="123-450-6780"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <h3>Role</h3>
        <fieldset>
          <div>
            <label>
              <span>Regular - Can’t delete members</span>
              <input
                type="radio"
                name="role"
                value="regular"
                checked={formData.role === "regular"}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <span>Admin - Can delete members</span>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={formData.role === "admin"}
                onChange={handleChange}
              />
            </label>
          </div>
        </fieldset>
        <br />
        {deleteMember && <button onClick={deleteMember}>Delete</button>}
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default MemberForm;
