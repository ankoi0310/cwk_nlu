import DefaultLayout from 'layout/Default/DefaultLayout'
import FullWidthLayout from 'layout/FullWidth/FullWidthLayout'
import CourseCancellation from 'pages/CourseCancellation/CourseCancellation'
import CourseRegistration from 'pages/CourseRegistration/CourseRegistration'
import EducationProgram from 'pages/EducationProgram/EducationProgram'
import Error from 'pages/Error/Error'
import ExamSchedule from 'pages/ExamSchedule/ExamSchedule'
import GraduationLookup from 'pages/GraduationLookup/GraduationLookup'
import Home from 'pages/Home/Home'
import Schedule from 'pages/Schedule/Schedule'
import Survey from 'pages/Survey/Survey'
import Transcript from 'pages/Transcript/Transcript'
import Tuition from 'pages/Tuition/Tuition'
import { createBrowserRouter, Navigate } from 'react-router-dom'

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
        path: 'education-program',
        element: <EducationProgram />,
      },
      {
        path: 'course-registration',
        element: <CourseRegistration />,
      },
      {
        path: 'course-cancellation',
        element: <CourseCancellation />,
      },
      {
        path: 'schedule',
        element: <Schedule />,
      },
      {
        path: 'exam-schedule',
        element: <ExamSchedule />,
      },
      {
        path: 'transcript',
        element: <Transcript />,
      },
      {
        path: 'tuition',
        element: <Tuition />,
      },
      {
        path: 'tuition-payment',
        element: <Tuition />,
      },
      {
        path: 'survey',
        element: <Survey />,
      },
      {
        path: 'graduation-lookup',
        element: <GraduationLookup />,
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
