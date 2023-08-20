import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LinkMoviesDetails = styled(NavLink)`
  padding: 0 5px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  color: black;
`;

export const ImgMoviesDetails = styled.img`
width: 200px;
`

export const DivInfoMoviesDetails = styled.div`
  display: flex;
  padding: 5px;
  border-bottom: 1px solid gray;
`;
 
export const DivTextMoviesDetails = styled.div`
  padding: 0 15px;
`;