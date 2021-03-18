import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  font-size: 20px;
  font-weight: bolder;
  border: none;  
  width: ${props=> props.large ? "500px" : "200px"};
  height: 70px;
  background-color: ${propos => propos.color};
;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.darkColor};
  }

`;

export default Button;