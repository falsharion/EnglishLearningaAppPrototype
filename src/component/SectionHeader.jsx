import React from 'react'
import { GrNext } from "react-icons/gr";

function SectionHeader({ header }) {
  return (
    <div className='section-header'>
      <h2>{header}</h2>
      <div className='button'>
      <GrNext />
      </div>
    </div>
  )
}

export default SectionHeader
