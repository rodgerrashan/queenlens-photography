"use client"
import { useState, useEffect } from "react";
import Router from "next/router";

export default function Dashboard() {

  
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        } else {
          Router.push("/login");
        }
      });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome to Dashboard, {user.role}!</h1>
    </div>
  );
}
