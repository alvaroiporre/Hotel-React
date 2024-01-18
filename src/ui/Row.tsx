import styled, { css } from "styled-components";

interface rowProps {
  type: string;
}

const Row = styled.div`
  display: flex;
  ${(props: rowProps) => props.type === 'horizontal' && css`
    justify-content: space-between;
    align-items: center;
  `}
  ${(props: rowProps) => props.type === 'vertical' && css`
    flex-direction: column;
    gap: 1.5rem;
  `}
`;

Row.defaultProps = {
  type:'horizontal',
};

export default Row;