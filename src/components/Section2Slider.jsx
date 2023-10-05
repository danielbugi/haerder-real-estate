import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import sketch from '../assets/condo-schema.png';
import sketch2 from '../assets/condo-schema-2.png';
import sketch3 from '../assets/asset-3.jpg';

import { useEffect, useState } from 'react';

const Section2Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const numOfSlides = 3;

  const prevSlide = () => {
    setCurrentSlide((oldSlide) => {
      const result = (oldSlide - 1 + numOfSlides) % numOfSlides;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentSlide((oldSlide) => {
      const result = (oldSlide + 1) % numOfSlides;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentSlide]);

  return (
    <Wrapper className="slider">
      <div className="slider-con">
        <div
          className="slide"
          style={{
            transform: `translateX(${100 * (0 - currentSlide)}%)`,
          }}
        >
          <div className="img-con">{<img src={sketch} alt="" />}</div>
          <div className="slide-1 slide-content">
            <h4>
              Nullam in nisl vitae elit sollicitudin bibendum in quis magna.
              Integer commodo velit nec orci
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id
              magni assumenda vero maxime, ad similique, blanditiis recusandae
              dolor dicta delectus sequi magnam iste?
            </p>
          </div>
        </div>

        <div
          className="slide"
          style={{
            transform: `translateX(${100 * (1 - currentSlide)}%)`,
          }}
        >
          <div className="img-con">{<img src={sketch2} alt="" />}</div>
          <div className="slide-2 slide-content">
            <h4>
              Nullam in nisl vitae elit sollicitudin bibendum in quis magna.
              Integer commodo velit nec orci
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id
              magni assumenda vero maxime, ad similique, blanditiis recusandae
              dolor dicta delectus sequi magnam iste?
            </p>
          </div>
        </div>

        <div
          className="slide"
          style={{
            transform: `translateX(${100 * (2 - currentSlide)}%)`,
          }}
        >
          <div className="img-con-slide-3">{<img src={sketch3} alt="" />}</div>
        </div>

        <div className="button-wrap">
          <button className="btn-main" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className="btn-main" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  height: 20rem;
  overflow: hidden;
  position: relative;
  .slide {
    height: 20rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
  }
  .img-con {
    /* width: 40%; */
    /* height: 100%;
    width: 15rem; */
    img {
      width: 15rem;
      height: 15rem;
    }
  }
  .button-wrap {
    display: flex;
    gap: 1rem;
    position: absolute;
    bottom: 0;
    left: 10px;
  }
  .slide-content {
    padding: 0 2rem;
    h4 {
      margin-bottom: 2rem;
    }
  }

  .img-con-slide-3 {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: bottom;
    }
  }
`;
export default Section2Slider;
