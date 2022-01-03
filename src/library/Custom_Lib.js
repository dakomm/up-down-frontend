import styled from "styled-components";
import { Link } from 'react-router-dom';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.cols || '1fr'};
  grid-template-rows: ${props => props.rows || '1fr'};
  grid-template-areas: ${props => props.areas || ''};
  place-items: ${props => props.placeItems || 'center start'}; //align-items justify-items
  gap: ${props => props.gap || '0px 0px'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
`

export const GridItem = styled.div`
  grid-column: ${props => props.col || '1/2'}; //column-start/column-end
  grid-row: ${props => props.row || '1/2'}; //row-start/row-end
  grid-area: ${props => props.area || ''};
  place-self: ${props => props.placeSelf ||'start center'}; //align-self justify-self
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  };
  font-family: ${props => props.fontFamily || '"Noto Sans KR", sans-serif'};
  font-weight: ${props => props.fontWeight || '400'};
  font-size: ${props => props.fontSize || '1rem'};
  color: ${props => props.color || 'black'};
`

export const CustomButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;
  width: ${props => props.width || 'auto'};
  font-family: ${props => props.fontFamily || '"Noto Sans KR", sans-serif'};
  font-size: ${props => props.fontSize || '0.8rem'};
  font-weight: ${props => props.fontWeight || '1'};
  padding: ${props => props.padding || '0.2rem 0.5rem 0.2rem 0.5rem'};
  background: ${props => props.background || 'white'};
  color: ${props => props.color || 'black'};
  margin: ${props => props.margin || '0'};
  border: ${props => props.border || '1px solid black'};
  border-radius: ${props => props.borderRadius || '4px'};
`

export const ClickableImg = styled.img`
  width: ${props => props.width || '40px'};
  height: ${props => props.height || '40px'};
  &:hover {
    cursor: pointer;
  }
`

export const SearchBar = styled.input`
  background-image: url('../image/search.png');
  background-position: 5px center;
  width: ${props => props.width || '400px'};
  height: ${props => props.height || '40px'};
  background: ${props => props.background || 'rgba(255,255,255,0.5)'};
  &:focus {
    background-image: '';
    padding: '20px'
    background: rgba(255,255,255,0.5);
  }
  &:hover {
    cursor: text;
  };
  font-size: ${props => props.fontSize || '20px'};
  input:-ms-input-placeholder {color:'rgba(0,0,0,0.5)';};
  input::-webkit-input-placeholder {color:'rgba(0,0,0,0.5)';};
  input::-moz-placeholder {color:'rgba(0,0,0,0.5)';};
  outline:none;
  border: ${props => props.border || '0px'} solid ${props => props.borderColor || 'white'}; 
  border-radius: ${props => props.borderRadius || '20px'};
  -webkit-box-shadow: 
    inset 0 0 0px  rgba(0,0,0,0.1),
          0 0 16px rgba(0,0,0,0.1); 
  -moz-box-shadow: 
    inset 0 0 0px  rgba(0,0,0,0.1),
          0 0 1px rgba(0,0,0,0.1); 
  box-shadow: 
    inset 0 0 0px  rgba(0,0,0,0.1),
          0 0 16px rgba(0,0,0,0.1); 
  padding: ${props => props.padding || '20px 20px 20px 80px'};
  margin: 0 0 10px 0;
`

export const Avatar = styled.img`
  src: ${props => props.src};
  width: ${props => props.width || '35px'};
  height: ${props => props.height || '35px'};
  vertical-align: middle;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`