import React from "react";
import styled from "styled-components";

type Props = {
  open: boolean;
  children: React.ReactNode;
};

export const Alert: React.FC<Props> = ({ open, children }) => {
  return (
    <StyledAlert role="alert" open={open}>
      {children}
    </StyledAlert>
  );
};

const StyledAlert = styled.div<{ open: Props["open"] }>`
  ${(props) => (props.open ? "display: block" : "display: none")};
  border: 2px solid #d43535eb;
  border-radius: 5px;
  background-color: #ffc6c6eb;
  padding: 3px;
`;
