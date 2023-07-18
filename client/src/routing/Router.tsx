import { Navigate, createBrowserRouter } from 'react-router-dom'
import DefaultLayout from 'layout/Default/DefaultLayout'
import FullWidthLayout from 'layout/FullWidth/FullWidthLayout'
import Home from 'pages/Home/Home'
import Error from 'pages/Error/Error'
import CourseRegistration from 'pages/CourseRegistration/CourseRegistration'
import Transcript from 'pages/Transcript/Transcript'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'course-registration',
        element: <CourseRegistration />,
      },
      {
        path: 'transcript',
        element: <Transcript />,
      },
    ],
  },
  {
    element: <FullWidthLayout />,
    children: [
      {
        path: '404',
        element: <Error errorCode={404} title={'Page Not Found'} />,
      },
      {
        path: '500',
        element: <Error errorCode={500} title={'Interval Server Error'} />,
      },
      {
        path: '*',
        element: <Navigate to="/404" />,
      },
    ],
  },
])

export default router
