import React from "react";
import styled from "styled-components";

const AriaDiv = ({ children, onClick, className, onKeyDown }) => {
  return (
    <div
      role="button"
      aria-pressed="false"
      tabIndex="0"
      className={className}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
};

const EmojiButton = styled(AriaDiv)`
  height: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  margin: 1rem;
  background-color: #00c7ef;
  width: fit-content;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 4px 10px rgba(26, 30, 23, 0.2);
  }
  border-radius: 100px;
  cursor: pointer;
  outline: none;
  user-select: none;
`;
export default EmojiButton;
