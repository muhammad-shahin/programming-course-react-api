import { LoadCourses } from "./components/Course/LoadCourses"
import { Header } from "./components/Header/Header"

function App() {

  return (
    <div className="container mx-auto">
      <Header></Header>
      <LoadCourses></LoadCourses>
    </div>
  )
}

export default App
