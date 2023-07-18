import React from 'react'
import { Link } from 'react-router-dom'
import { FaHouseUser, FaEnvelope, FaPhone } from 'react-icons/fa6'

const Contact = () => {
  return (
    <>
      <div className="mb-4 flex items-center justify-center md:justify-start gap-x-3">
        <FaHouseUser />
        <p>
          <Link
            to={'https://fit.hcmuaf.edu.vn/'}
            target="_blank"
            className={'text-link'}
            title={'Nhấn để truy cập trang web của khoa'}>
            Khoa Công nghệ thông tin - Trường Đại học Nông Lâm TP.HCM
          </Link>
          <br />
          Khu phố 6, phường Linh Trung, quận Thủ Đức, TP.HCM
        </p>
      </div>
      <div className="mb-4 flex items-center justify-center md:justify-start gap-x-3">
        <FaEnvelope />
        <ul>
          <li>
            <Link to={'mailto:huynhvahuuan3620@gmail.com'} className={'text-link'}>
              huynhvahuuan3620@gmail.com
            </Link>
          </li>
          <li>
            <Link to={'mailto:19130003@st.hcmuaf.edu.vn'} className={'text-link'}>
              19130003@st.hcmuaf.edu.vn
            </Link>
          </li>
        </ul>
      </div>
      <p className="mb-4 flex items-center justify-center md:justify-start gap-x-3">
        <FaPhone />
        <Link to={'tel:+84787782050'} className={'text-link'} title={'Nhấn để gọi cho Koi'}>
          +84 787 782 050
        </Link>
      </p>
    </>
  )
}
export default Contact
