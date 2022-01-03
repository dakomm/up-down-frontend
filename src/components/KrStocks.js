import React from 'react';
import styled from "styled-components";
import { GridContainer, GridItem } from '../library/Custom_Lib';


const Main = styled.div`
  max-width: 100%;
  width: 100vw;
  height: 100vh;;
  
`;

const KrStocks = () => {


  return(
    <Main>
      <GridContainer cols="1fr 50px" rows="80px 60px" placeItems="certer center">
        <GridItem col="1/4" row="1/3" placeSelf="center center">
          국내주식 Charts
        </GridItem>
      </GridContainer>
    </Main>
  )
}
export default (KrStocks);