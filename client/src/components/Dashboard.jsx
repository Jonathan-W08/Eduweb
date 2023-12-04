import React from "react";
import CardDashboard from "./CardDashboard";

const Dashboard = () => {
  return (
    <div className="flex-1 bg-whiteBlue w-5/6 min-h-screen p-6">
      <div className="mt-12">
        <h1 className="text-3xl font-bold">Webinar Saya</h1>
        <div className="grid grid-col gap-3 mt-3 sm:grid-cols-2 xl:grid-cols-4">
          <CardDashboard title={"Semua Webinar"} />
          <CardDashboard title={"Webinar Aktif"} />
          <CardDashboard title={"Dibatalkan"} />
          <CardDashboard title={"Selesai"} />
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-3xl font-bold">Terlaris</h1>
        <div className="grid grid-col gap-3 mt-3 sm:grid-cols-2 xl:grid-cols-4">
          <CardDashboard title={"IT Development"} />
          <CardDashboard title={"Marketing"} />
          <CardDashboard title={"Bisnis"} />
          <CardDashboard title={"Self Development"} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
