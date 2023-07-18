import React, { FC } from 'react'
import Contact from './Contact'
import styles from './Footer.module.css'
import classNames from 'classnames/bind'
import SocialNetwork from './SocialNetwork'
import { Link } from 'react-router-dom'
import darkThemeLogo from 'assets/images/dark_theme_logo.png'
import UsefulLink from './UsefulLink'

const cx = classNames.bind(styles)

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <SocialNetwork />
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* <!-- Tailwind Elements section --> */}
          <div className={'lg:col-span-3'}>
            <h6 className={cx('footer-title')}>
              <img src={darkThemeLogo} alt="logo" className={'w-24 mr-4'} />
              Code With Koi
            </h6>
            <p className={'text-center'}>
              <q className={'italic'}>
                Trang web được xây dựng và sử dụng dữ liệu từ{' '}
                <Link to={'https://dkmh.hcmuaf.edu.vn/'} target="_blank" className="text-blue-600">
                  trang Đăng ký môn học - Trường Đại học Nông Lâm TP.HCM
                </Link>
                , được xây dựng bởi Huỳnh Văn Hữu Ân (Koi), sinh viên Khoa Công nghệ thông tin
              </q>
            </p>
          </div>
          <div className={'lg:col-span-1'}></div>
          {/* <!-- Useful links section --> */}
          <div className={'lg:col-span-3'}>
            <h6 className={cx('footer-title')}>Đường dẫn hữu ích</h6>
            <UsefulLink />
          </div>
          {/* <!-- Contact section --> */}
          <div className={'lg:col-span-5'}>
            <h6 className={cx('footer-title')}>Liên hệ</h6>
            <Contact />
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <a className="font-semibold text-neutral-600 dark:text-neutral-400" href="https://huynhvanhuuan.id.vn/">
          Code With Koi
        </a>
      </div>
    </footer>
  )
}

export default Footer
