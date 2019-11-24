import React from 'react';
import jsonp from 'jsonp';
import styled from 'styled-components';
import MatchDetails from './MatchDetails';

const apiURL = 'http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a';

const LiveDetails = styled.div` 
    height: 200px;
    width: 16200px;
    margin: 0 auto;
    position: absolute;
    transition: ${props => ((props.currentIndex) !== (0)) ? 'all 0.5s ease' : ''};
    left: ${props => ((props.currentIndex + 2 ) <= (props.totalElements +1) ) ? props.currentIndex * -600 : 0}px;
    width: ${props => props.totalElements ? (props.totalElements) * 600 : 16200}px;
`;

const Loader = styled.div`
    height: 200px;
    margin: 0 auto;
    padding-top: 70px;
`;

class Ticker extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
      super();
      this.state = { 
          liveMatches: '',
          currentIndex: 0,
        };
      this.loadMatches = this.loadMatches.bind(this);
    }

    componentDidMount() {
        this.loadMatches();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    isTimeLessThanTwoMinutes(timeStamp){
        const now  = (new Date()).getTime();
        return ((now - timeStamp) > 1000 * 60 * 2);
    }

    getDataFromAPI(){
        jsonp(apiURL, { name: 'jsonFlickrApi' }, (err, data) => {
            if(data){
            const time_now  = (new Date()).getTime();
            let storedData = data;
            storedData.timeStamp = time_now;
            localStorage.setItem("liveMatches", JSON.stringify(storedData));
            this.setState({
                liveMatches: data,
            });
            }else {
                if(err){
                    console.log('handle error....')
                }
            }
        });
    }

    startAnimation() {
    const liveEvents = this.state.liveMatches.liveEvents;

    if(liveEvents && liveEvents.length) {
       this.setState(prevState => ({
        currentIndex: ((liveEvents.length - 1) === this.state.currentIndex) ? 0 : prevState.currentIndex + 1
      }));
    }
}

    loadMatches() {
        const checkForLocalData = JSON.parse(localStorage.getItem("liveMatches"));

        if(checkForLocalData) {
            if(this.isTimeLessThanTwoMinutes(checkForLocalData.timeStamp)) {
                localStorage.removeItem("liveMatches");
                this.getDataFromAPI();
            } else {
                this.setState({
                    liveMatches: checkForLocalData,
                  });
            }
        } else {
            this.getDataFromAPI();
        }
        //start animation effects now
        this.interval = setInterval(() => this.startAnimation(), 3000);
    }
  
    render() {
        if (this.state.liveMatches) {
            const liveEvents = this.state.liveMatches.liveEvents;
            return (
                <LiveDetails currentIndex={this.state.currentIndex} totalElements = {liveEvents.length}>
                    {
                    liveEvents.map((liveEvent, index) => {
                    return (
                        <MatchDetails key={index} index={index} liveEvent={liveEvent}></MatchDetails>
                    );
                    })}
                 </LiveDetails>
            );
        } else {
            return (
                <Loader>
                  Loading...
                </Loader>
            );
        }
    }
  }

export default Ticker;
