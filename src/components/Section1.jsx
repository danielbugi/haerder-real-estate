import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { backgrounds } from '../data';
import { FaArrowCircleRight } from 'react-icons/fa';

const Section1 = () => {
  const [currentBg, setCurrentBg] = useState(0);

  const nextBg = () => {
    setCurrentBg((oldBg) => {
      const result = (oldBg + 1) % backgrounds.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextBg();
    }, 8000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentBg]);

  return (
    <Wrapper id="section-1">
      <ul className="slides">
        {backgrounds.map((item, i) => {
          return (
            <li
              key={i}
              className="slide"
              style={{
                opacity: i === currentBg ? 1 : 0,
                visibility: i === currentBg ? 'visible' : 'hidden',
              }}
            >
              <img src={item} alt="" className="bg-img" />
            </li>
          );
        })}
      </ul>

      <div className="section-header">
        <div className="title section-center">
          <div className="title-con">
            <h2>Discover Your Dream Home</h2>
            <p>Subscribe and get notified about new condos for you</p>
          </div>
          <div className="icon-h">
            <FaArrowCircleRight />
          </div>
        </div>

        <div className="section-form">
          <div className="form-header">
            <h3>welcome to your</h3>
            <h1>new living!</h1>
          </div>
          <form action="">
            <div className="input-wrapper">
              <label htmlFor="">Your name*</label>
              <input type="text" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Your email*</label>
              <input type="email" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="">Your phone*</label>
              <input type="text" />
            </div>
            <button type="submit" className="btn-main">
              Get Notified!
            </button>
          </form>
          <span>*Required Fields</span>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: auto;
  background-size: cover;
  transition: background-image 0.5s ease;
  .slides {
    height: 90vh;
    position: relative;
  }
  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 3s ease-in-out;
  }
  .bg-img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }

  .section-header {
    width: 100%;
    background: var(--main-2);
    position: relative;
  }

  .section-form {
    background: var(--main-1);
    position: absolute;
    right: 340px;
    bottom: -11px;
    padding: 30px 30px 15px 30px;
    width: 360px;

    .form-header {
      color: var(--white);
      padding: 1rem 0;
      border-bottom: 1px solid #909090;
      margin-bottom: 1rem;
    }
    label {
      color: var(--white);
      font-weight: bold;
    }
    span {
      color: #909090;
    }
    input {
      padding: 12px;
    }
  }
  .input-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .icon-h {
    height: 100%;
    svg {
      font-size: 28px;
      color: var(--orange);
    }
  }

  .title {
    padding: 2rem 0;
    color: var(--white);
    display: flex;
    align-items: center;
  }
  .title-con {
    width: 50%;
  }

  .btn-main {
    width: 100%;
  }

  @media screen and (max-width: 1420px) {
    .section-form {
      right: 110px;
    }
    .section-header {
      padding: 1rem;
    }
  }
  @media screen and (max-width: 840px) {
    .slides {
      height: 60vh;
    }
    .section-header {
    }
    .section-form {
      position: static;
    }
    .title-con {
      width: 80%;
    }
  }

  @media screen and (max-width: 420px) {
    .slides {
      height: 40vh;
    }
    .section-form {
      width: auto;
    }
  }
`;
export default Section1;
