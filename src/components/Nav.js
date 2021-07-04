import styled from 'styled-components';
import {Link} from "react-router-dom"

const Nav = () => {
  return(
    <StyledNav>
      <h1><Link id="logo" to="/">Capture</Link></h1>
      <ul>
        <li> 
          <Link to="/">1. About Us</Link>
        </li>
        <li> 
          <Link to="/work">1. Our work</Link>
        </li>
        <li> 
          <Link to="/contact">1. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  )
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index:10;
  a {
    color: #fff;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  h1 {

    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  h1 a {
    font-size: 1.8rem;
  }
  li {
    padding-left: 9rem;
    position: relative;
  }

`

export default Nav;