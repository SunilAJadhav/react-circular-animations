import React from 'react';
import styled from 'styled-components';

const UNIBETURL = 'https://www.unibet.com/betting#/event/live/';

const MatchContainer = styled.div`
  padding: 20px 0 30px 0;
  text-align: center;
  height: 200px;
  width: 600px;
  float: left; 
`;

const Score = styled.h2`
    margin: 0;
    font-size: 1.55em;
    font-weight: 100;
    color: yellow;
`;

const PlayingTeams = styled.h3`
  margin: 0;
  padding: 10px 0;
`;

const MatchDateTime = styled.h4`
  color: #999;
  margin: 0;
  padding-bottom: 25px;
`;

const ButtonLink  = styled.a`
  padding: 8px 10px;
  color: #fff;
  background-color: #3fa83c;
  border-radius: 5px;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    background: #3fa83c;
    color: #333;
  }
`;

class MatchDetails extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
      super();
    }

    formatDate = (dateStr) => {
      const date = new Date(dateStr);
      const today = new Date().toDateString();
      const time = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
      return (today === date.toDateString())?
         'Today ' + time  : new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0] + time;
    }

    getSportIcon = (sport) => {
      if(sport === 'TENNIS'){
         return "tennisIcon";
      }else if (sport === 'FOOTBALL'){
        return "footballIcon";
      }else if(sport === 'BASKETBALL'){
        return "basketballIcon";
      }
      return "defaultGameIcon";
    }

    getScore = (score) => {
      if(!score) return;
      return ((score.home ? score.home : '') +' - '+ (score.away ?  score.away : ''));
    }

    getMatchType = (event) => {
      return (
      <PlayingTeams>
          <span className={this.getSportIcon(event.sport)}></span>
          {((event.homeName ? event.homeName : '') +' - '+  (event.awayName? event.awayName : ''))}
      </PlayingTeams>);
    }
  
    render(props) {
      const liveEvent = this.props.liveEvent;
      return (
          <MatchContainer>
              <Score>{this.getScore(liveEvent.liveData.score)}</Score>
              {this.getMatchType(liveEvent.event)}
              <MatchDateTime>{this.formatDate(liveEvent.event.start)}</MatchDateTime>
              <ButtonLink
                target="_blank" 
                rel="noopener noreferrer"
                title="place a bet"
                href={UNIBETURL+liveEvent.liveData.eventId}
                >
                  place a bet 
              </ButtonLink>
         </MatchContainer>
      );
    }
  }

export default MatchDetails;
