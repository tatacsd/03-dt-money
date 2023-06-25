import * as Dialog from '@radix-ui/react-dialog';
import logoImg from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';
import { Button, HeaderContainer, HeaderContent } from './style';
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="logo" />

        <Dialog.Root>
          {/* asChild wont create another button */}
          <Dialog.Trigger asChild>
            <Button>New Transaction</Button>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
