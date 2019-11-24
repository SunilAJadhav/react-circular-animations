import React from 'react';
import styled from 'styled-components';



class Header extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
      super();
    }

    render(props) {

      return (
        <footer>
          <div class="inner">
              <p>&copy; 1997-2015, Unibet. All rights reserved.</p>
          </div>
      </footer>
      );
    }
  }

export default Header;
