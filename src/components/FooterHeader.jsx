/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';

const FooterHeader = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="footer-header">
          <h2>Partner With Harder and you will find your dream house.</h2>
          <div>
            <p className="text-1">
              Whether you're in search of the perfect rental, looking to buy
              your dream home, or ready to sell your property, we're here to
              make it happen.
            </p>
            <p>
              Email: <a href="#">hello@harder.com</a>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--main-2);
  .section-center {
    padding: 2rem 0;
  }
  .footer-header {
    color: var(--white);
    display: flex;
  }
  p {
    font-weight: bold;
    a {
      color: #faef2b;
      text-decoration: underline;
    }
  }
  .text-1 {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1150px) {
    .footer-header {
      display: flex;
      flex-direction: column;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;
export default FooterHeader;
