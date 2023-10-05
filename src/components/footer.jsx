import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="main-wrapper">
          <div className="row">
            <div className="main">
              <div className="footer-main">
                <h2>Harder</h2>
                <p>1261 Broadway, Suite 404</p>
                <p>New York, NY 10001</p>

                <a href="#">hello@harder.com</a>
              </div>
            </div>
            <div className="footer-location">
              <h5>see our locations:</h5>
              <button className="btn-main">SELECT</button>
            </div>
          </div>
          <p>&copy; 2023 BG-Digital Services</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--main-1);
  .section-center {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .row {
    display: flex;
    margin-bottom: 4rem;
  }
  .main-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 2rem;
    padding-bottom: 2rem;

    color: #fff;
    a {
      color: #fff;
    }
  }
  p {
    color: #fff;
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
`;
export default Footer;
