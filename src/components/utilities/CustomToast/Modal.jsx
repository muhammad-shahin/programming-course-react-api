import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import infoIcon from "../../../assets/icons/info.svg";

const Modal = ({ modalStatus, title, message, handleModalCloseBtn }) => {
  const modal = useRef(null);

  useEffect(() => {
    if (modalStatus) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [modalStatus]);

  return (
    <dialog open ref={modal} id="modal" className="">
      <img
        src={infoIcon}
        alt="Info Icon"
        className="relative mx-auto -top-4 w-[48px]"
      />
      <div className="p-5 text-center space-y-4">
        <h2 className="text-3xl">{title}</h2>
        <p className="font-normal text-[18px] max-w-[350px]">
          {message} <br /> Thank You 🙂{" "}
        </p>
      </div>
      <button
        onClick={handleModalCloseBtn}
        className="text-center bg-sky-600 text-white text-xl w-full py-2 hover:bg-rose-500 transition-all"
      >
        Close
      </button>
    </dialog>
  );
};

Modal.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleModalCloseBtn: PropTypes.func.isRequired,
};

export default Modal;
