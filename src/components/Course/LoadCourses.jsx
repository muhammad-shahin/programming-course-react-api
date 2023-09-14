import { useEffect, useState } from 'react'
import { ShowCourses } from './ShowCourses';

export const LoadCourses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('programmingCourse.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    console.log(courses);

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {
            courses.map(course => (
                <ShowCourses key={course.id} course={course} />
            ))
        }
        
    </div>
  )
}
