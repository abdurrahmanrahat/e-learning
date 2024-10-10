import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import { useUsers } from "../../../../Hooks/api/useUsers";

const UsersManagement = () => {
  
  const { users } = useUsers();
  const [editingUserId, setEditingUserId] = useState(null);

  // Function to handle changing the role of a user
  const handleRoleChange = (userId, newRole) => {
    console.log(userId, newRole); // For debugging: logs the user ID and selected role

    // Close the dropdown after selecting a new role
    setEditingUserId(null);
  };

  return (
    <div className="p-6 bg-[#F4F6FB] rounded-lg shadow-md">
      {/* Primary Title with two parts "All Users" */}
      <div className="mb-6">
        <PrimaryTitle
          headingPart1={"All"}
          headingPart2={"Users"}
          style={"text-center text-4xl font-semibold text-[#2F327D]"}
        />
      </div>

      {/* User table */}
      <div className="overflow-x-auto rounded">
        <table className="min-w-full table-auto">
          {/* Table headers */}
          <thead>
            <tr className="bg-[#49BBBD] text-white">
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                #
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                Image
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                Gender
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                Role
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table body to display users */}
          <tbody>
            {users?.map((user, idx) => (
              <tr
                key={user?._id}
                className="bg-white hover:bg-gray-50 transition duration-300 border-b border-slate-200"
              >
                {/* User index number */}
                <td className="px-6 py-4 text-sm text-[#2F327D]">{idx + 1}</td>

                {/* User profile image */}
                <td className="px-6 py-4">
                  <img
                    className="w-[60px] h-[60px] rounded-full object-cover border-2 border-[#49BBBD]"
                    src={user?.photoUrl}
                    alt={user?.name}
                  />
                </td>

                {/* User name */}
                <td className="px-6 py-4 text-sm text-[#2F327D] font-medium">
                  {user?.name}
                </td>

                {/* User email */}
                <td className="px-6 py-4 text-sm text-[#8A90A5]">
                  {user?.email}
                </td>

                {/* User gender */}
                <td className="px-6 py-4 text-sm text-[#2F327D]">
                  {user?.gender}
                </td>

                {/* User role with the option to edit */}
                <td className="px-6 py-4 text-sm">
                  {/* Show a dropdown for editing if the user is being edited */}
                  {editingUserId === user?._id ? (
                    <select
                      onChange={(e) =>
                        handleRoleChange(user?._id, e.target.value)
                      } // Handle role change when a new option is selected
                      className="px-2 py-1 border border-gray-300 rounded"
                    >
                      <option value="admin">Admin</option>
                      <option value="instructor">Instructor</option>
                      <option value="student">Student</option>
                    </select>
                  ) : (
                    // Display user's current role with appropriate color styling
                    <span
                      className={`px-4 py-1 text-xs font-semibold rounded-full 
                        ${
                          user?.role === "admin"
                            ? "bg-emerald-100 text-emerald-500"
                            : user?.role === "instructor"
                            ? "bg-indigo-100 text-indigo-500"
                            : "bg-yellow-100 text-yellow-500"
                        }`}
                    >
                      {user?.role}
                    </span>
                  )}
                </td>

                {/* Edit action button */}
                <td className="px-6 py-4 text-sm text-[#2F327D]">
                  <button onClick={() => setEditingUserId(user?._id)}>
                    {" "}
                    {/* Set the user to edit when the button is clicked */}
                    <FaUserEdit className="text-xl text-[#49BBBD] hover:text-[#3A9A9A] transition duration-200" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
