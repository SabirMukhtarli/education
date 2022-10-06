import React from 'react'
import Wrapper from '../../layout/Wrapper'
import CategorySection from './CategorySection'
import CategorySelectSection from './CategorySelectSection'

export default function Index() {
  return (
    <Wrapper>
        <CategorySelectSection/>
        <CategorySection/>
    </Wrapper>
  )
}
