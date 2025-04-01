import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import LandingPageStyles from '../styles/LandingPage.module.css'
import LandingPicture1 from '../assets/LandingPictureGirl.jpg'
import LandingPicture2 from '../assets/LandingPictureGuy.jpg'
import SelectionListing from './SelectionListing'

export default function HomePage({ 
  products,
  mensProducts,
  womensProducts,
  jeweleryProducts,
  electronicProducts
 }) {
  return (
    <Container fluid>
      <Carousel className="flex-grow-1">
        <Carousel.Item>
          <img
            className="d-relative w-100"
            src={LandingPicture1}
            alt="Slide 1"
          />
          <Carousel.Caption className={LandingPageStyles.customCaption}>
            <h3>First Slide</h3>
            <p>Description for first slide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={LandingPicture2}
            alt="Slide 2"
          />
          <Carousel.Caption className={LandingPageStyles.customCaption}>
            <h3>Second Slide</h3>
            <p>Description for second slide</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/** There is an issue with this line of code. Not understand why this array doesn't pass information through. */}
      <SelectionListing 
        products={[mensProducts[0], womensProducts[0], electronicProducts[0], jeweleryProducts[0]]}
      />
    </Container>
  )
}
