export default function AdminDashboard() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <form method="POST" action="/api/admin/create-user">
          <input name="email" placeholder="New User Email" required />
          <input name="password" placeholder="New User Password" type="password" required />
          <button type="submit">Create User</button>
        </form>
      </div>
    );
  }
  