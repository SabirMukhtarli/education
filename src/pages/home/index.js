import React from 'react'
import BeginSection from '../../layout/BeginSection'
import Footer from '../../layout/Footer'
import Nav from '../../layout/Nav'
import Wrapper from '../../layout/Wrapper'
import CourseSection from './CourseSection'
import FeedbackSection from './FeedbackSection'
import HolderSection from './HolderSection'
import ImageSection from './ImageSection'
import TimeSection from './TimeSection'

export default function Index() {
  return (
    <Wrapper>
  
   <ImageSection/>
   <TimeSection/>
   <CourseSection/>
   <FeedbackSection/>
   <HolderSection/>
   </Wrapper>
  )
}
