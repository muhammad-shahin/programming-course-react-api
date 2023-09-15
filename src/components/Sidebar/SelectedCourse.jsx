import PropTypes from "prop-types";

const SelectedCourse = ({ selectedCourse, count }) => {
  const { course_name } = selectedCourse;

  return (
    <>
      <h2 className="text-[#1C1B1B99] font-medium text-[18px]">
        {count}. {course_name}
      </h2>
    </>
  );
};

SelectedCourse.propTypes = {
  selectedCourse: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

export default SelectedCourse;
