import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from './components/Header'
import Ticker from './components/Ticker';
import Footer from './components/Footer'
import GlobalStyle from './styles/GlobalStyles';
import './icons.css';

const Container = styled.div`
    background-image: radial-gradient(#2f8e2c,#2e7423);
    background-color: #2e7423;
    text-align: center;
`;

const Content =  styled.div`
    width: 900px;
    text-align: left;
    margin: 16px auto;
`;

const LiveMatchesContainer = styled.div`
    overflow: hidden;
    width: 71%;
    position: relative;
    float: left;
    height: 185px;
`;

const LiveMatches = styled.div`
    position: relative;
    height: 185px;
    max-width: 800px;
    overflow: hidden;
    text-align: center;
    background: #222;
    color: #FFF;
`;

class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
      super();
    } 
  
    render() {
      return(
        <React.Fragment>
         <GlobalStyle></GlobalStyle> 
        <Container>
            <Header />
            <Content>
                <article>
                    <h1>Live matches</h1>
                    <p className="preamble">
                        Here is a list of matches that are live right now.
                    </p>
                    <aside>
                        <h2>Live betting</h2>
                        <p>Place your bets as the action unfolds. We offer a wide selection of live betting events and you can place both single and combination bets.</p>
                        <p>You will be able to see an in-play scoreboard with the current result and match stats, while on selected events you will also be able to watch the action live with Unibet TV on the desktop site.</p>
                    </aside>
                    <LiveMatchesContainer>
                        <LiveMatches>
                            <Ticker></Ticker>
                        </LiveMatches>
                    </LiveMatchesContainer>
                </article>
            </Content>
            <Footer />
        </Container>
      </React.Fragment>
      )
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
