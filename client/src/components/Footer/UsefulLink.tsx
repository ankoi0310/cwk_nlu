import React from 'react'
import { Link } from 'react-router-dom'

const UsefulLink = () => {
  return (
    <>
      <p className="mb-4">
        <Link to={'about'} className={'text-link'}>
          Về chúng tôi
        </Link>
      </p>
      <p className="mb-4">
        <Link to={'course-registration'} className={'text-link'}>
          Đăng ký môn học
        </Link>
      </p>
      <p className="mb-4">
        <Link to={'schedule'} className={'text-link'}>
          Thời khoá biểu
        </Link>
      </p>
      <p>
        <Link to={'transcript'} className={'text-link'}>
          Bảng điểm
        </Link>
      </p>
    </>
  )
}
export default UsefulLink
