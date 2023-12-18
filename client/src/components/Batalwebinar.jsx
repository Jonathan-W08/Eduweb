import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { changeAccount, fetchAccount } from "../store/account-slice";
import { useDispatch, useSelector } from "react-redux";

const Batalwebinar = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const account = useSelector((props) => props.account.account);

  // Save or unsave webinar
  const saveWebinar = async () => {
    const resp = await axios.patch("http://localhost:5000/save-webinar", {
      ...account,
      id_webinar: props.id,
    });

    fetchAccount().then((data) => {
      data.forEach((e) => {
        if (e.id === account.id) {
          const webinars = JSON.parse(e.webinars_save);
          dispatch(changeAccount({ ...e, webinars_save: webinars }));
        }
      });
    });

    setOpenModal(false);
  };
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>
        {" "}
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
              Apakah anda ingin membatalkan untuk mengikuti webinar?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={saveWebinar}>
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

export default Batalwebinar;
