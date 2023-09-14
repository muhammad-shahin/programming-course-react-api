import { useEffect, useState } from "react";
import { ShowCourses } from "./ShowCourses";
import { SidebarContainer } from "../Sidebar/SidebarContainer";

export const LoadCourses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    fetch("programmingCourse.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // handle select course button
  const handleSelectCourse = (course) => {
    if (selectedCourses.includes(course)) {
      alert("This Course is Already Selected");
    } else {
      const updateSelectedCourse = [...selectedCourses, course];
      setSelectedCourses(updateSelectedCourse);
    }
  };

  return (
    <section className="flex lg:flex-row flex-col-reverse justify-between gap-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {courses.map((course) => (
          <ShowCourses
            key={course.id}
            course={course}
            handleSelectCourse={handleSelectCourse}
          />
        ))}
      </div>
      <div className="lg:relative w-[70%]">
        <SidebarContainer selectedCourses={selectedCourses}></SidebarContainer>
      </div>
    </section>
  );
};
