import React from "react";
import { useSelector } from "react-redux";
import SidebarProfile from "./SidebarProfile";

import { FiEdit } from "react-icons/fi";

import Batalwebinar from "./Batalwebinar";
import { Link } from "react-router-dom";

const Navpartisipasi = () => {
  const account = useSelector((props) => props.account.account);
  const webinars = useSelector((state) => state.webinars.webinars);

  return (
    <div className="grid grid-cols-12 min-h-screen bg-white md:gap-3 md:px-6">
      <SidebarProfile account={account} />

      <div className="flex flex-col items-center col-span-12 bg-white p-6 rounded-md md:items-stretch md:col-span-8 md:p-0 md:mt-6 md:h-min md:shadow-md md:pb-6">
        <h1 className="text-3xl font-bold">List Webinar</h1>

        <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
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
                  Link Webinar
                </th>
              </tr>
            </thead>
            <tbody>
              {webinars.map((webinar) => {
                if (account.webinars_save.includes(webinar.id)) {
                  return (
                    <tr
                      key={webinar.id}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <td className="px-6 py-4">{webinar.title}</td>
                      <td className="px-6 py-4">{webinar.date}</td>

                      <td className="px-6 py-4">
                        <Batalwebinar id={webinar.id} />
                      </td>

                      <td className="px-6 py-4">
                        <Link to={webinar.webinar_link}>
                          {webinar.webinar_link}
                        </Link>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Navpartisipasi;
