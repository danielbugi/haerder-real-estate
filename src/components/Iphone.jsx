import styled from 'styled-components';
import iphone from '../assets/iphone.png';
import { FaWifi, FaBatteryThreeQuarters, FaChevronRight } from 'react-icons/fa';
import { BsReception4 } from 'react-icons/bs';
import { BiHomeAlt2 } from 'react-icons/bi';
import person1 from '../assets/persons/person-4.jpg';

const Iphone = () => {
  return (
    <Wrapper>
      <img src={iphone} alt="" className="iphone-img" />
      <div className="iphone-background"></div>
      <div className="iphone-background-layer"></div>
      <div className="iphone-layer-1">
        <div className="line-layer-mini"></div>
        <div className="iphone-contact"></div>
        <ul>
          <li className="iphone-features">
            <div className="features-wrap">
              <div className="iphone-feature-icon">
                <BiHomeAlt2 />
              </div>
              My Harders
            </div>
            <FaChevronRight />
          </li>
          <li className="iphone-features">
            <div className="features-wrap">
              <div className="iphone-feature-icon">
                <BiHomeAlt2 />
              </div>
              My Harders
            </div>
            <FaChevronRight />
          </li>
          <li className="iphone-features">
            <div className="features-wrap">
              <div className="iphone-feature-icon">
                <BiHomeAlt2 />
              </div>
              My Harders
            </div>
            <FaChevronRight />
          </li>
          <li className="iphone-features">
            <div className="features-wrap">
              <div className="iphone-feature-icon">
                <BiHomeAlt2 />
              </div>
              My Harders
            </div>
            <FaChevronRight />
          </li>
        </ul>
        <div className="layer-1-footer">
          <p>LOG OUT</p>
          <div className="line-layer-large"></div>
        </div>
      </div>
      <div className="iphone-contact">
        <div className="iphone-img-person-con">
          <img src={person1} alt="" />
        </div>
        <h5>Joecelyn N.</h5>
        <p>Harder Chicago</p>
      </div>
      <span className="el-time">10:34</span>
      <span className="el-phone-items">
        <FaWifi />
        <FaBatteryThreeQuarters />
        <BsReception4 />
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 20;
  .iphone-img {
    height: 555px;
    width: 390px;
  }
  .iphone-background {
    height: 505px;
    width: 255px;
    background: #fff;
    position: absolute;
    top: 15px;
    left: 69px;
    z-index: -1;
  }

  .el-time {
    position: absolute;
    top: 18px;
    left: 84px;
  }
  .el-phone-items {
    position: absolute;
    top: 18px;
    left: 266px;
  }

  .iphone-background-layer {
    height: 505px;
    width: 255px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 15px;
    left: 69px;
    z-index: -1;
  }

  .iphone-layer-1 {
    height: 280px;
    width: 255px;
    background: #e5e5e5;
    position: absolute;
    bottom: 34px;
    left: 69px;
    z-index: -1;
    border-radius: 30px;
  }

  /* Iphone */
  .iphone-features {
    display: flex;
    font-size: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin: 1rem 0;
    color: #7a7a7a;
    .iphone-feature-icon {
      font-size: 12px;
      padding: 0.5rem;
      border: 1px solid #7a7a7a;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .features-wrap {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .line-layer-mini {
    background-color: #7a7a7a;
    height: 3px;
    width: 25px;
    margin: 0 auto;
    margin-top: 5px;
    border-radius: 16px;
  }
  .layer-1-footer {
    height: 4rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;

    p {
      font-size: 10px;
      color: #7a7a7a;
    }
    .line-layer-large {
      width: 80px;
      height: 3px;
      background: #000;
      border-radius: 16px;
    }
  }

  .iphone-contact {
    width: 255px;
    position: absolute;
    top: 40px;
    left: 69px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    color: var(--white);
    h5 {
      font-weight: bold;
      margin-top: 0.8rem;
      font-size: 15px;
    }
    p {
      font-size: 12px;
      margin-top: 1.2rem;
    }
  }

  .iphone-img-person-con {
    height: 5rem;
    width: 5rem;
    overflow: hidden;
    border-radius: 50%;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`;
export default Iphone;
