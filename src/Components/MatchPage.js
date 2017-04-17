/*
  MatchPage.js

  This provides the implementation for the MatchPage component.

  MatchPage maintains state in the form of futureMatchIndex
    -futureMatchIndex represents an index in the array of futureMatches

  MatchPage has three props: currentLogin, futureMatches, setMode.
  -currentLogin is an object that stores the account information for the person who is currently logged in.
  -futureMatches is an array of objects that store the acccount information of the artists that currentLogin could potentially match with
  -setMode is a callback that updates the state of mode in App.js.


*/
import React, { Component } from 'react';
import styled from 'styled-components';
import data from '../../public/sounderUsers.json';

import UserDetail from './UserDetail.js';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';
import Button from 'react-bootstrap/lib/Button.js';







class MatchPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      futureMatchIndex:0

    };
  }


  handleNext(){
    this.setState({futureMatchIndex: (this.state.futureMatchIndex + 1)});
  }


  render(){



    return(
      <Grid>
        <Row>
          <Col>
            <Button value="Back to Home" onClick={()=>this.props.setMode()}>Back To Home</Button>
          </Col>
        </Row>
        <Row>
          <Col><UserDetail currentLogin={this.props.futureMatches[this.state.futureMatchIndex]}/></Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={()=>this.handleNext()} value="Next">Next</Button>
            <Button onClick={()=>this.handleLike()} value="Like">Like</Button>
          </Col>
        </Row>
      </Grid>


    );
  }
}



export default MatchPage;
