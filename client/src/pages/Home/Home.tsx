import AppCarousel from 'components/Home/AppCarousel/AppCarousel'
import Posts from 'components/Posts/Posts'
import { FC } from 'react'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <AppCarousel />
      <Posts />
    </>
  )
}

export default Home
