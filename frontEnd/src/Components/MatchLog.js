/*

MatchLog.js

MatchLog takes in 2 props: matchlist and clickMatch
-matchlist is an array of objects that store the acccount information
of the artists that currentLogin has matched with
-clickMatch is a callback function that updates the state of mode and currentMatch in App.js


*/


import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';
import Panel from 'react-bootstrap/lib/Panel.js';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup.js';
import Button from 'react-bootstrap/lib/Button.js';
import ListGroup from 'react-bootstrap/lib/ListGroup.js';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem.js';
import '../index.css';
import Popover from 'react-bootstrap/lib/Popover.js';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger.js';

const CenteredTitle=styled.h1`
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid #ff4b00;
`;

const MatchName = styled(ListGroupItem)`
  color: black;
  font-size: 16px;
  curson: pointer;
  &:hover {
   color: #FF7700;
 }

`;

const MatchNameStyle = styled(Col)`
 curson: pointer;
  &:hover {
   color: #FF7700;
 }
`

const MatchPreview = styled(Popover)`
  width: 400px;

`


function MatchLog(props){

  const matchlog = (props.matchlist).map((user)=>{
    let name = user.username;
    const popoverHoverFocus = (
    <MatchPreview id="popover-trigger-hover-focus" title={name}  positionLeft={200}
      positionTop={50}>
      <p><strong>Genre</strong> {user.genre}</p>
      <p><strong>Followers</strong> {user.numFollowers}</p>
      <p><strong>Karma</strong> {user.karma}</p>
    </MatchPreview>
  );
    return (
        <MatchName key={name} value={name} onClick={()=>{console.log(user);props.clickMatch(user)}}>
          <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocus} arrowOffsetLeft='40px'>
            <MatchNameStyle lg={2}>{name}</MatchNameStyle>
          </OverlayTrigger>
        </MatchName>
    );
  });

  return (
    <Grid>
      <Row>
        <Col lg={2}><CenteredTitle>Matches</CenteredTitle></Col>
      </Row>
      <Row>
        <Col lg={2}>
          <ListGroup>{matchlog}</ListGroup>
        </Col>
      </Row>
    </Grid>
  );
};

export default MatchLog;