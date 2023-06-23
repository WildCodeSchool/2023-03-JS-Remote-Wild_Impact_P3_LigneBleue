import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="bg-neutral-200">
      <Outlet />
    </div>
  );
}

export default AdminLayout;
