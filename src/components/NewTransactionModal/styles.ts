import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed; /* Stay in place even if scrolling the page */
  width: 100vw; /* Full width (cover the whole page) */
  height: 100vh; /* Full height (cover the whole page) */
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75); /* Black background with opacity */
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-800']};
  padding: 2rem 3rem;

  position: fixed;
  top: 50%; /* Center the modal */
  left: 50%; /* Center the modal */
  transform: translate(-50%, -50%); /* Center the modal */

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      border-radius: 6px;
      padding: 0 1.25rem;
      margin-top: 1.5rem;

      cursor: pointer;

      transition: backgroung 0.2s;

      &:hover {
        background: ${(props) => props.theme['green-700']};
      }
    }
  }
`;

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: 'deposit' | 'withdraw';
  isActive?: boolean;
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'deposit'
        ? props.theme['green-500']
        : props.theme['red-500']};
  }

  &[data-state='unchecked']:hover {
    transition: background 0.2s;
    background: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    background: ${(props) =>
      props.variant === 'deposit'
        ? props.theme['green-500']
        : props.theme['red-500']};
    color: ${(props) => props.theme.white};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  color: ${(props) => props.theme['gray-300']};
  cursor: pointer;
`;
