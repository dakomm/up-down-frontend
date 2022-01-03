import React from 'react';
import styled from "styled-components";
import { ClickableImg, GridContainer, GridItem, SearchBar } from '../library/Custom_Lib';
import bigMenuIcon from '../image/bigMenuIcon.png';

const AppBarArea = styled.div`
  max-width: 100%;
  width: 100vw;
  height: 140px;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: lightgray;
  background-color: white;
  color: black;
  font-size: 30px;
`;

const TopBar = () => {


  return(
    <AppBarArea>
      <GridContainer cols="100px 300px 1fr 50px" rows="80px 60px" placeItems="certer center">
        <GridItem col="1/2" row="1/2" placeSelf="center center">
          <ClickableImg src={bigMenuIcon} height="25px" width="25px" alt="menu"/>
        </GridItem>
        <GridItem col="2/3" row="1/2" placeSelf="center center">
          <h4>Up or Down?</h4>
        </GridItem>
        <GridItem col="3/4" row="1/2" placeSelf="center center">
          <SearchBar placeholder="Search"/>
        </GridItem>
        <GridItem col="4/5" row="1/2" placeSelf="center center">
          Grid4
        </GridItem>
        <GridItem col="1/4" row="2/3" placeSelf="center center">
          국내주식
        </GridItem>
      </GridContainer>
    </AppBarArea>
  )
}
export default (TopBar);