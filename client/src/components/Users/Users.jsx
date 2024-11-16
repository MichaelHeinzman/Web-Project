import useFetchUsers from "@hooks/useFetchUsers";
import "./Users.css";
import ColumnsLayout from "@layouts/Columns/Columns";

const Users = () => {
  const { data: users, isLoading, isError, error } = useFetchUsers();

  return (
    <ColumnsLayout columns={1}>
      <div className="users-container">
        <h2>Users List</h2>
        {isLoading && <p className="users-message">Loading users...</p>}
        {isError && <p className="users-error">{error.message}</p>}
        {users?.length > 0 ? (
          <ul className="users-list">
            {users.map((user) => (
              <li key={user.id} className="users-list-item">
                <span>{user.name}</span>
                <span>{user.email}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="users-message">No users found.</p>
        )}
      </div>
    </ColumnsLayout>
  );
};

export default Users;
