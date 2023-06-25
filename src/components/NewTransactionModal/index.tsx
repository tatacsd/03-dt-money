import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import {
  CloseButton,
  Content,
  Overlay,
  TransactionTypeButton,
  TransactionTypeContainer,
} from './styles';

{
  /* Portal - Render a new element ANYWHERE in the DOM */
}
export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      {/* the dark background */}
      <Overlay />
      {/* the dialog itself */}
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Dialog.Title>Add new transaction</Dialog.Title>
        <form>
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Amount" required />
          <input type="text" placeholder="Category" required />
          <TransactionTypeContainer>
            <TransactionTypeButton variant="deposit" value="deposit">
              <ArrowCircleUp size={24} />
              Deposit
            </TransactionTypeButton>
            <TransactionTypeButton variant="withdraw" value="withdraw">
              <ArrowCircleDown size={24} />
              Withdraw
            </TransactionTypeButton>
          </TransactionTypeContainer>
          <button type="submit">Add</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
