import React from "react";
import CardDashboard from "./CardDashboard";
import { LuTrash } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";


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
                <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" type="button">
                <LuTrash className="w-10"/>
                </button>

                        <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative p-4 w-full max-w-md max-h-full">
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <div class="p-4 md:p-5 text-center">
                                        <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Apakah anda ingin menghapus webinar ini?</h3>
                                        <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                           Iya
                                        </button>
                                        <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Tidak</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                                                
                </td>
                <td class="px-6 py-4">
                    <a href="#"><FiEdit className="w-10" /></a>
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
                <a href="#" ><LuTrash className="w-10"/></a>
                </td>
                <td class="px-6 py-4">
                    <a href="#"><FiEdit className="w-10" /></a>
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