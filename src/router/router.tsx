import { createBrowserRouter } from "react-router";
import AuthAdmin from "../modulesAdmin/AuthAdmin";
import Teacher from "../modulesTeacher/teacher/Teacher";
import Parent from "../modulesParent/parent/Parent";
import Student from "../modulesAdmin/student/Student";
import PageError from "../components/PageError";
import Home from "../moduleHome/Home";
import LayoutAdmin from "../Layouts/LayoutAdmin";

const router = createBrowserRouter([
  {
    // path="/",
    element: <LayoutAdmin />,
    errorElement:<PageError/>,
    // index: true,
    children: [
        {
            path:"/",
            element:<Home/>
        },
      {
        path: "/admin",
        element: <AuthAdmin />,
      },
      {
        path: "/teacher",
        element: <Teacher />,
      },
      {
        path: "/parent",
        element: <Parent />,
      },
      {
        path: "/student",
        element: <Student />,
      },
      // x

    ]
  }
]);

export default router;
