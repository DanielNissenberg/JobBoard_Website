import React from 'react'
import Hero from '../compnents/Hero'
import HomeCards from '../compnents/HomeCards'
import JobListings from '../compnents/JobListings';
import ViewAllJobs from '../compnents/ViewAllJobs';

const HomePage = () => {
  return (
    <>
        <Hero/>
        <HomeCards />
        <JobListings isHome={true}  />
        <ViewAllJobs/>
    </>
  )
}

export default HomePage