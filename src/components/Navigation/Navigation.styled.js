import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 25px;
  font-weight: 700;
  font-size: 18px;
  color: #2a363b;
  background-image: linear-gradient(to right, #54b3d6, #54b3d6 50%, white 50%);
  background-size: 200% 100%;
  background-position: -100%;
  transition: all 0.3s ease-in-out;
  &:before {
    content: '';
    background: #54b3d6;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    background-position: 0;
  }
  &:hover::before {
    width: 100%;
  }
  &:active {
    color: #54b3d6;
  }
`;
