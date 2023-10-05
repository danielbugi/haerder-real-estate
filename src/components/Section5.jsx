/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import secBg from '../assets/sec-5-bg.jpg';
import { FaStar } from 'react-icons/fa';

const Section5 = () => {
  return (
    <Wrapper style={{ backgroundImage: `url(${secBg})` }}>
      <div className="section-center">
        <div className="reviews">
          <div className="review review-1">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h4>John and Mary S.</h4>
            <p>
              "Working with Harder was an absolute delight. From the moment we
              contacted them, their team's dedication and professionalism shone
              through. They not only helped us sell our home but also exceeded
              our expectations by securing a fantastic price. We couldn't be
              more grateful."
            </p>
          </div>
          <div className="review review-1">
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h4> Sarah M.</h4>
            <p>
              "Our journey to finding the perfect home felt like a dream, thanks
              to Harder. Their expert guidance and deep knowledge of the local
              market made the process effortless. We're now happily settled in
              our dream home, and we owe it all to them."
            </p>
          </div>
        </div>
        <h1>stress-free leasing and contactless move ins.</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 80vh;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  .section-center {
    height: 100%;
    padding-top: 6rem;
    padding-bottom: 6rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    h1 {
      color: #fff;
      font-weight: 900;
    }
    .reviews {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }
  }
  .review {
    margin-right: 2rem;
    background: rgba(255, 255, 255, 0.7);
    padding: 1rem;
    width: 18rem;
    .stars {
      margin-bottom: 1rem;
    }
    h4 {
      margin-bottom: 2rem;
    }
    p {
      color: #282828;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 1250px) {
    .section-center {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  @media screen and (max-width: 1000px) {
    .section-center {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      text-align: center;
    }
  }

  @media screen and (max-width: 620px) {
    height: auto;
    .reviews {
      margin: 0;
      flex-direction: column;
      width: 100%;
    }
    .review {
      width: 100%;
      margin: 0;
      margin-bottom: 2rem;
    }
  }
`;
export default Section5;
