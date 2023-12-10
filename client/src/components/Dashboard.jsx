import React from "react";
import CardDashboard from "./CardDashboard";

import { FaEdit } from "react-icons/fa";
import ConfirmDelete from "./ConfirmDelete";



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
        <h1 className="text-3xl font-bold">List Webinar</h1>
        
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Judul
                </th>
                <th scope="col" class="px-6 py-3">
                    Tanggal
                </th>
               
                <th scope="col" class="px-6 py-3">
                    Hapus
                </th>
                <th scope="col" class="px-6 py-3">
                    Edit
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Fundamental UI/UX design: Wifeframing dan Prototyping
                </th>
                <td class="px-6 py-4">
                Jumat, 17 Nov 2023
                </td>
               
                <td class="px-6 py-4">
                <ConfirmDelete/>                           
                </td>
                <td class="px-6 py-4">
                    <a href="#"><FaEdit className="w-10" /></a>
                </td>
            </tr>

            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                React.JS: Getting Started, Concepts & Implementation
                </th>
                <td class="px-6 py-4">
                Sabtu, 18 Nov 2023
                </td>
               
                <td class="px-6 py-4">
                <ConfirmDelete/>    
                </td>
                <td class="px-6 py-4">
                    <a href="#"><FaEdit className="w-10" /></a>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>





      </div>
    </div>
  );
};

export default Dashboard;
