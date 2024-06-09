import React from 'react'
import Banner from '../../components/ui/Banner';
import LoremIpsumGenerator from '../../components/ui/LoremIpsum';

const Home = () => {
  return (
    <>
        <Banner currentPage={'home'} />
        <LoremIpsumGenerator />
    </>
  )
}

export default Home