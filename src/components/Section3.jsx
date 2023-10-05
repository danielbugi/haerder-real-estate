import styled from 'styled-components';
import Iphone from './Iphone';
import person from '../assets/persons/person-5.jpg';

const Section3 = () => {
  return (
    <Wrapper id="section-3">
      <div className="section-center">
        <Iphone />
        <div className="section-3-content">
          <h2>We are with you right in your pocket.</h2>
          <p className="s3-p">
            Connect with harder members across the globe, pay your rent, make
            maintenance requests, and unlock your doors.
          </p>
          <div className="s3-content-secondary">
            <div className="s3-secondary-person-img">
              <img src={person} alt="" />
            </div>
            <p>Liz, community manager, NYC</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: var(--main-2);
  .section-center {
    display: flex;
    justify-content: center;
    padding: 4rem 0;
  }

  .section-3-content {
    width: 50%;
    color: var(--white);
    padding: 1rem;
    h2 {
      width: 20rem;
      margin-bottom: 2rem;
    }
  }
  .s3-p {
    padding-right: 10rem;
    margin-bottom: 4rem;
  }
  .s3-content-secondary {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .s3-secondary-person-img {
    height: 8rem;
    width: 8rem;
    overflow: hidden;
    border-radius: 50%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 840px) {
    .s3-p {
      padding-right: 0;
    }
  }
  @media screen and (max-width: 680px) {
    .section-center {
      padding: 1rem;
      flex-direction: column-reverse;
      align-items: center;
    }
    .section-3-content {
      width: 100%;
      h2 {
        font-size: 28px;

        margin-bottom: 2rem;
        width: auto;
      }
    }
  }
`;
export default Section3;
