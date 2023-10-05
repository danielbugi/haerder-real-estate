import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { features } from '../data';
import Section2Slider from './Section2Slider';

const Section2 = () => {
  return (
    <Wrapper id="section-2">
      <div className="section-center">
        <div className="header-con">
          <h3 className="section-2-header">Why to choose Harder</h3>
        </div>
        <div className="section-2-content">
          <div className="column-check">
            <ul className="features-list">
              {features.map((item, i) => {
                return (
                  <li className="feature" key={i}>
                    <span className="icon">
                      <FaCheckCircle />
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <Section2Slider />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
  .header-con {
    margin-bottom: 3rem;
  }
  .feature {
    margin-bottom: 1.5rem;
    display: inline-block;
    width: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
    span {
      margin-right: 1rem;
      font-size: 18px;
    }
    .icon {
      color: var(--orange);
    }
  }
  .section-2-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .column-check {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 1270px) {
    .section-center {
      padding: 0 4rem;
    }
  }
  @media screen and (max-width: 840px) {
    .section-2-content {
      flex-direction: column;
    }
    .slider {
      width: 100%;
      align-self: center;
    }
  }

  @media screen and (max-width: 640px) {
    .section-center {
      padding: 0 1rem;
    }
  }
  @media screen and (max-width: 530px) {
    .section-center {
      padding: 0 1rem;
    }

    .slide {
      flex-direction: column;
    }

    .slider {
      height: 32rem;
    }
  }
`;

export default Section2;
