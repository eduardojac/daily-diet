import { Text } from "react-native";
import styled from "styled-components/native";
import { ForkKnife, UserCircle } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;


`;

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;


export const ForkKnifeIcon = styled(ForkKnife).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.GRAY_1,
}))``;

export const Logo = styled.Image`
  width: 36px;
  height: 31px;
`;

export const UserCircleIcon = styled(UserCircle).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.GRAY_1,
  
  
}))``;