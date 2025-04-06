import React from 'react'
import Header from '../Nabar/Navbar'
import SliderCards from '../SliderCards/SliderCards'
import ServicesSection from '../ServicesSection/ServicesSection'
import TourSliderSection from '../TourSliderSection/TourSliderSection'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'

export default function PageHome() {
  return (
    <div>
      <SliderCards/>
      <ServicesSection/>
      <TourSliderSection/>
      <ScrollToTopButton/>
    </div>
  )
}
