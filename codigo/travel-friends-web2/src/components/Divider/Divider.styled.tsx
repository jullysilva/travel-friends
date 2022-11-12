import styled from 'styled-components';

interface DividerProps {
  pad?: string | number;
}

export const Divider = styled.div<DividerProps>`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  padding: ${(props) => props.pad || '0 5px'};
`;
