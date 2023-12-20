import React from "react";
import axios from "axios";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchWebinars } from "../store/webinar-slice";

const ConfirmDelete = (props) => {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  // Delete Webinar
  const deleteWebinar = async () => {
    try {
      await axios.delete(`http://localhost:5000/webinars/${props.id}`);
      dispatch(fetchWebinars());

      setOpenModal(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>
        <FaTrash className=" text-black" />
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah anda ingin menghapus webinar ini?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={deleteWebinar}>
                {"Iya"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Tidak
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConfirmDelete;
