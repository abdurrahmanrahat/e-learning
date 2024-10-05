import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useUsers } from "../../../../Hooks/api/useUsers";

const UsersManagement = () => {
  const { users } = useUsers();
  const [editingUserId, setEditingUserId] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");

  // Handle the change of the role
  const handleRoleChange = (userId, newRole) => {
    // Update the role in the state
    const updatedUsers = users.map(user =>
      user._id === userId ? { ...user, role: newRole } : user
    );
    // Call your update API here to persist the changes (if required)
    // e.g., updateUserRole(userId, newRole);

    setEditingUserId(null);  // Close the dropdown after selecting the role
  };

  return (
    <div className="p-6 bg-[#F4F6FB] rounded-lg shadow-md">
      <div className="mb-6">
        <PrimaryTitle
          headingPart1={"All"}
          headingPart2={"Users"}
          style={"text-center text-4xl font-semibold text-[#2F327D]"}
        />
      </div>

      <div className="overflow-x-auto rounded">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-[#49BBBD] text-white">
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">Gender</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">Role</th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={user?._id} className="bg-white hover:bg-gray-50 transition duration-300 border-b border-slate-200">
                <td className="px-6 py-4 text-sm text-[#2F327D]">{idx + 1}</td>
                <td className="px-6 py-4">
                  <img
                    className="w-[60px] h-[60px] rounded-full object-cover border-2 border-[#49BBBD]"
                    src={user?.photoUrl}
                    alt={user?.name}
                  />
                </td>
                <td className="px-6 py-4 text-sm text-[#2F327D] font-medium">
                  {user?.name}
                </td>
                <td className="px-6 py-4 text-sm text-[#8A90A5]">
                  {user?.email}
                </td>
                <td className="px-6 py-4 text-sm text-[#2F327D]">
                  {user?.gender}
                </td>
                <td className="px-6 py-4 text-sm">
                  {editingUserId === user?._id ? (
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      onBlur={() => handleRoleChange(user?._id, selectedRole)}
                      className="px-2 py-1 border border-gray-300 rounded"
                    >
                      <option value="admin">Admin</option>
                      <option value="instructor">Instructor</option>
                      <option value="student">Student</option>
                    </select>
                  ) : (
                    <span
                      className={`px-4 py-1 text-xs font-semibold rounded-full 
                        ${user?.role === 'admin' ? 'bg-emerald-100 text-emerald-500' :
                          user?.role === 'instructor' ? 'bg-indigo-100 text-indigo-500' :
                            'bg-yellow-100 text-yellow-500'}`}
                    >
                      {user?.role}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-[#2F327D]">
                  <button onClick={() => setEditingUserId(user?._id)}>
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
