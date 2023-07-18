import Grid from '@mui/material/Grid'
import Grid2 from '@mui/material/Unstable_Grid2'
import classNames from 'classnames/bind'
import AppCarousel from 'components/AppCarousel/AppCarousel'
import Banner from 'components/Banner/Banner'
import Posts from 'components/Posts/Posts'
import { FC } from 'react'
import SideBar from '../../components/Home/SideBar/SideBar'
import styles from './Home.module.css'

const cx = classNames.bind(styles)

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Banner />
      <Grid2 container spacing={4} className={'m-4 mb-8'}>
        <Grid2 component={'div'} xs={12} sm={6} md={9} className={'flex flex-col gap-y-4'}>
          <AppCarousel />
          <Posts />
        </Grid2>
        <Grid2 component={'div'} xs={12} sm={6} md={3}>
          <SideBar />
        </Grid2>
      </Grid2>
    </>
  )
}

export default Home
