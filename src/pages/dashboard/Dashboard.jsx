import React from "react";
import { useUserProfile } from "../../api/allApi";
import Loading from "../../components/Loading";

function Dashboard() {
  const { user, loading, error } = useUserProfile();
  return <div>Dashboard</div>;
}

export default Dashboard;
