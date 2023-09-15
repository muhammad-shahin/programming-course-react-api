import PropTypes from "prop-types";
import successIcon from "../../../assets/icons/success.svg";

const Toast = ({
  icon = successIcon, // Default icon value
  primaryColor,
  secondaryColor,
  seekBarColor,
  message,
  isVisible
}) => {
  const primaryBg = {
    backgroundColor: primaryColor,
  };
  const secondaryBg = {
    backgroundColor: secondaryColor,
  };
  const seekBarStyle = {
    backgroundColor: seekBarColor,
  };

  if (!isVisible) {
    return null; 
  }

  return (
    <div
      className="appearStyle flex bg-white rounded-md w-[20rem] h-[3.5rem] mx-auto my-5 overflow-hidden"
      style={primaryBg}
    >
      <div
        className="bg-[#b3ecd2] w-fit py-3 px-4 rounded-l-md flex justify-center items-center"
        style={secondaryBg}
      >
        <img src={icon} alt="Toast Icon" />
      </div>
      <div className="w-[100%] bg-[{}] flex justify-start items-center">
        <p className="text-white text-[18px] font-semibold px-3">{message}</p>
      </div>
      <div className="seek-bar" style={seekBarStyle}></div>
    </div>
  );
};

Toast.propTypes = {
  icon: PropTypes.string, // Remove the isRequired for the default icon
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  seekBarColor: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Toast;
