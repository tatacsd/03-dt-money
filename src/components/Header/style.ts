import styled from 'styled-components';

// For ultra-wide screens
export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`;

// always centralize the content and limit the width
export const HeaderContent = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  height: 3.125rem;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  transition: background-color 0.2s; // it will work in and out

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`;
