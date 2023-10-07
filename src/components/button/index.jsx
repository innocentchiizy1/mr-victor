/* eslint-disable react/prop-types */
// import React from "react";
import styled from "styled-components";

const Arrow = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

const Button = ({ children, onClick }) => {
  return <Arrow onClick={onClick}>{children}</Arrow>;
};

export default Button;
