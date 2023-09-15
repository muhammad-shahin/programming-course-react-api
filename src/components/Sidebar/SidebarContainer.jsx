import PropTypes from "prop-types";
import SelectedCourse from "./SelectedCourse";

export const SidebarContainer = ({ selectedCourses, remainingCredit, totalCredit, totalPrice }) => {

    let count = 0;

  return (
    <div className="lg:sticky top-10 right-0 bg-white rounded-lg p-6 h-fit text-left space-y-4 py-10">
      <h1 className="text-[#2F80ED] text-[18px] font-bold">
        Credit Hour Remaining {remainingCredit} hr
      </h1>
      <hr className="w-full h-[2px] " />
      <h1 className="text-black text-[20px] font-bold">
        Course You Have Selected
      </h1>
      {
        selectedCourses.map(selectedCourse => (
            <SelectedCourse key={selectedCourse.id} selectedCourse={selectedCourse} count={count += 1}></SelectedCourse>
        ))
      }
      <hr className="w-full h-[2px] " />
      <h1 className="text-black text-[18px] font-medium">Total Credit Hour: {totalCredit}</h1>
      <hr className="w-full h-[2px] " />
      <h1 className="text-black text-[18px] font-medium">Total Price: {totalPrice}</h1>
      <hr className="w-full h-[2px] " />
    </div>
  );
};

SidebarContainer.propTypes = {
  selectedCourses: PropTypes.array.isRequired,
  remainingCredit: PropTypes.number.isRequired,
  totalCredit: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
