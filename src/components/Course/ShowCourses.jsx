import dollarIcon from "../../assets/icons/dollar-icon.png";
import readingIcon from "../../assets/icons/reading-icon.png";
import PropTypes from "prop-types";

export const ShowCourses = ({ course, handleSelectCourse }) => {
  const { cover_image, course_name, course_description, credit, price } =
    course;

  return (
    <div className="w-full space-y-5 bg-white p-5 rounded-lg">
      <div>
        <img src={cover_image} alt="Cover Image" className="w-full" />
      </div>
      <h2 className="text-[18px] font-semibold">{course_name}</h2>
      <p className=" text-[#1C1B1B99] font-medium min-h-[100px]">
        {course_description}
      </p>
      <div className="flex justify-between">
        <img src={dollarIcon} alt="Dollar Icon" />
        <p className="text-[#1C1B1B99] font-medium text-[18px]">
          Price : {price}
        </p>
        <img src={readingIcon} alt="Reading Icon" />
        <p className="text-[#1C1B1B99] font-medium text-[18px]">
          Credit : {credit}hr
        </p>
      </div>
      <button
        className="bg-[#2F80ED] w-full px-5 py-2 rounded-lg text-[18px] font-semibold text-white border border-[#2F80ED] hover:bg-transparent hover:text-[#2F80ED] transition-all"
        onClick={() => {
          handleSelectCourse(course);
        }}
      >
        Select
      </button>
    </div>
  );
};

ShowCourses.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectCourse: PropTypes.func.isRequired,
};
