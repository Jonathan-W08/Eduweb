import React from "react";
import CardDashboard from "./CardDashboard";
import { LuTrash } from "react-icons/lu";

import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import ConfirmDelete from "./ConfirmDelete";

const Dashboard = (props) => {
  // Data webinars
  const webinars = useSelector((state) => state.webinars.webinars);

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
        <h1 className="text-3xl font-bold">List Webinar</h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Judul
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal
                </th>

                <th scope="col" className="px-6 py-3">
                  Hapus
                </th>
                <th scope="col" className="px-6 py-3">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {webinars.map((webinar) => {
                return (
                  <tr
                    key={webinar.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {webinar.title}
                    </th>
                    <td className="px-6 py-4">
                      {webinar.date} / {webinar.time}
                    </td>

                    <td className="px-6 py-4">
                      <ConfirmDelete
                        id={webinar.id}
                        getWebinars={props.getWebinars}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/penyelenggara/dashboard/update-webinar/${webinar.id}`}
                      >
                        <FiEdit className="w-10" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
