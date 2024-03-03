import { useNavigation } from "@react-navigation/native";
import { Container, ForkKnifeIcon, ItemContainer, Logo, UserCircleIcon } from "./styles";

import logoImg from '@assets/Vector.png';

export function Header() {

  return (
    <Container>
      <ItemContainer>
        <ForkKnifeIcon
          weight="bold"
        />
        <Logo source={logoImg} />
      </ItemContainer>
      <ItemContainer>
        <UserCircleIcon
          weight="bold"
        />
      </ItemContainer>
    </Container>

  )
}