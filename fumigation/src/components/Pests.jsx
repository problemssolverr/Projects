import React from 'react'
import Ants from '../pages/Ants'
import AntInfoSection from './AntInfoSection'
import BedBug from '../pages/BedBug'
import BugInfoSection from './BugInfoSection'
import Mice from '../pages/Mice'
import CockRoachInfoSection from './CockRoachInfoSection'
import Cockroach from '../pages/Cockroach'

const Pest = () => {
  return (
    <div>
      <Ants/>
      <AntInfoSection/>
      <br />
      <BugInfoSection/>
      <BedBug/>
      <br />
      <Mice/>
      <br />
      <CockRoachInfoSection/>
      <Cockroach/>
    </div>
  )
}

export default Pest