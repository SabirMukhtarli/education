import React from 'react'
import Wrapper from '../../layout/Wrapper'
import CoursDetail from './CoursDetail'
import CoursDetailTitle from './CoursDetailTitle'
import FeedbackSection from '../home/FeedbackSection'


export default function Index() {
  return (
   <Wrapper>
    <CoursDetailTitle/>
    <CoursDetail/>
    <FeedbackSection/>
   </Wrapper>
  )
}
