import { Button, HeaderContainer, HeaderContent } from './style';

import logoImg from '../../assets/logo.svg';
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="logo" />

        <Button>New Transaction</Button>
      </HeaderContent>
    </HeaderContainer>
  );
}
