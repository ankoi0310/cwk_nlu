import React, { FC } from 'react'
import styles from './CourseRegistration.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface CourseRegistrationProps {}

const CourseRegistration: FC<CourseRegistrationProps> = () => (
  <section className={cx('section')}>
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center">
        Trang đăng ký khoá học nè{' '}
      </h1>
    </div>
  </section>
)

export default CourseRegistration
