import styled from 'styled-components';
import asset1 from '../assets/asset-2.jpg';
import asset2 from '../assets/asset-4.jpg';

const Section4 = () => {
  return (
    <Wrapper id="section-4">
      <div className="section-center">
        <div className="card card-1">
          <div className="img-wrap img-1">
            <img src={asset2} alt="" />
          </div>
          <div className="sec-4-content con-1">
            <h3>Plenty of Room For Everyone Even For Your Car</h3>
            <p>
              We understand your privacy. Every person should have his own space
              where he can live his own private live. Even the smallest
              apartments are big and space enough to feel comfortable. And we
              think that your car deserves the same in the garage.
            </p>
            <button className="btn-main btn">Be the first to know!</button>
          </div>
        </div>
        <div className="card card-2">
          <div className="img-wrap img-2">
            <img src={asset1} alt="" />
          </div>
          <div className="sec-4-content con-2">
            <h3>Spectacular Views</h3>
            <p>
              Start your day by enjoying the unforgettable view from your home.
              Open the window and smell the fresh air of the pure nature.
            </p>
            <button className="btn-main btn">Be the first to know!</button>
          </div>
        </div>
        <iframe
          src="https://player.vimeo.com/video/293438220"
          width="100%"
          height="20rem"
          allowfullscreen
          frameBorder={0}
        ></iframe>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: auto;
  .section-center {
    padding-top: 4rem;
  }
  .img-wrap {
    height: 18rem;
    width: 45rem;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .btn {
    font-size: 15px;
    padding: 5px 8px;
  }

  .card {
    position: relative;
    height: 22rem;
  }

  .sec-4-content {
    width: 32rem;
    background: var(--main-2);
    color: var(--white);
    padding: 1.5rem;
    h3 {
      margin-bottom: 1.5rem;
    }
    p {
      margin-bottom: 1.5rem;
    }
  }

  .img-1 {
    float: right;
  }

  .con-1 {
    position: absolute;
    top: 10px;
    left: 35px;
  }
  .con-2 {
    position: absolute;
    top: 10px;
    right: 35px;
  }

  iframe {
    height: 50rem;
  }

  @media screen and (max-width: 1300px) {
    .section-center {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  @media screen and (max-width: 1050px) {
    .sec-4-content {
      position: static;
      width: 100%;
    }

    .img-wrap {
      width: 100%;
    }

    .card {
      display: flex;
      flex-direction: column;
      height: auto;
      margin-bottom: 2rem;
    }

    iframe {
      height: 40rem;
    }
  }
  @media screen and (max-width: 520px) {
    iframe {
      height: 20rem;
    }
  }
`;
export default Section4;
