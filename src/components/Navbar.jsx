import { links } from '../data';
import { styled } from 'styled-components';
import logo from '../assets/harder-logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="logo">
          <img src={logo} alt="" height={'65rem'} />
        </div>
        <div className="row">
          <ul className={showLinks ? 'links active' : 'links'}>
            {links.map((link) => {
              return (
                <li
                  className={showLinks ? 'link link-active' : 'link'}
                  onClick={() => setShowLinks(false)}
                  key={link.id}
                >
                  <a href={link.url} className="link-href">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="burger" onClick={() => setShowLinks(!showLinks)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .links {
    display: flex;
    gap: 2rem;
  }
  .link-href {
    padding: 1rem;
    text-transform: capitalize;

    &:hover {
      color: var(--orange);
    }
  }

  .burger {
    height: 20px;
    width: 20px;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    display: none;
  }
  .line {
    width: 100%;
    height: 2px;
    background-color: black;
  }

  @media screen and (max-width: 480px) {
    .nav-center {
      padding: 0 2rem;
      position: relative;
    }
    .links {
      /* display: none; */
      position: absolute;
      width: 100%;
      height: 20rem;
      background-color: rgba(0, 0, 0, 0.8);
      top: 4.5rem;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* display: none; */
      height: 0;
      transition: 0.3s ease-in-out;
      z-index: 997;
    }

    .active {
      /* display: flex; */
      height: 20rem;
    }

    .link {
      font-weight: bold;
      display: none;
    }

    .link-href {
      color: #fff;
    }

    .link-active {
      display: block;
    }

    .burger {
      display: flex;
    }
  }
`;
export default Navbar;
