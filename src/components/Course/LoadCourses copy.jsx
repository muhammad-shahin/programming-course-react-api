import { useEffect, useState } from "react";
import { ShowCourses } from "./ShowCourses";
import { SidebarContainer } from "../Sidebar/SidebarContainer";
import Toast from "../utilities/CustomToast/Toast";
import infoIcon from "../../assets/icons/info.svg";
import Modal from "../utilities/CustomToast/Modal";

export const LoadCourses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showToast, setShowToast] = useState([]);
  const [isModalOpen, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    fetch("programmingCourse.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // handle select course button click
  const handleSelectCourse = (course) => {
    if (selectedCourses.includes(course)) {
      setModalTitle("Already Selected");
      setModalMessage(
        "The course you are trying to select is already selected. Select Others Course that you haven't selected yet."
      );
      setShowModal(true);
    } else {
      const updateRemaining = remainingCredit - course.credit;
      const updateTotalCredit = totalCredit + parseInt(course.credit);
      const updateTotalPrice = totalPrice + parseInt(course.price);
      if (updateRemaining < 0) {
        setModalTitle("Credit Not Available");
        setModalMessage(
          "You don't have enough credit to purchase this course. Your total credit limit was 20. You Reached your limit."
        );
        setShowModal(true);
      } else {
        const updateSelectedCourse = [...selectedCourses, course];
        setSelectedCourses(updateSelectedCourse);
        setRemainingCredit(updateRemaining);
        setTotalCredit(updateTotalCredit);
        setTotalPrice(updateTotalPrice);
        setShowToast([
          ...showToast,
          <Toast
            icon={infoIcon}
            primaryColor={"#5EA2C4"}
            secondaryColor={"#6677a5"}
            seekBarColor={"blue"}
            message={"Course Added In Cart"}
            key={showToast.length}
          ></Toast>,
        ]);
      }
    }
  };
  // Modal Close Button onClick handling
  const handleModalCloseBtn = () => {
    setShowModal(false);
  };

  return (
    <section className="flex lg:flex-row flex-col-reverse justify-between gap-10 lg-items-none">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {courses.map((course) => (
          <ShowCourses
            key={course.id}
            course={course}
            handleSelectCourse={handleSelectCourse}
          />
        ))}
      </div>
      <div className="lg:relative w-[70%]">
        <SidebarContainer
          selectedCourses={selectedCourses}
          remainingCredit={remainingCredit}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
        ></SidebarContainer>
      </div>
      <Modal
        modalStatus={isModalOpen}
        title={modalTitle}
        message={modalMessage}
        handleModalCloseBtn={handleModalCloseBtn}
      ></Modal>
      {showToast.map((show) => show)}
    </section>
  );
};
