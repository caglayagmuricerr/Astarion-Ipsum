import React from 'react'
import Banner from '../ui/Banner';
import BinaryGenerator from '../../components/ui/BinaryGenerator';

const Binary = () => {
  return (
    <>
        <Banner currentPage={'binary'} />
        <BinaryGenerator />
    </>
  )
}

export default Binary