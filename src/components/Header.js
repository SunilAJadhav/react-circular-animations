import React from 'react';
import styled from 'styled-components';
import LogoImg from '../images/unibet-logo.png';

const Logo = styled.div`
  height: 33px;
  background: url(${props => props.uri ? (props.uri):'' }) no-repeat;
  background-size: 200px 33px;
  text-indent: -999em;
`;

class Header extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
      super();
    }

    render(props) {
      return (
          <React.Fragment>
            <header>
              <Logo uri={LogoImg}>Unibet</Logo>
              </header>
              <nav>
                  <ul>
                      <li><a href="#">React circular animation with styled components</a></li>
                  </ul>
              </nav>
         </React.Fragment>
      );
    }
  }

export default Header;
