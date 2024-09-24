import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';


function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage imgSrc="/assest/images/parts-img-1.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imgSrc="/assest/images/parts-img-2.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imgSrc="/assest/images/parts-img-3.jpg" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;