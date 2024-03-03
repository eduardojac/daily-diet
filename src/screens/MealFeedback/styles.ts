import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 44px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme, isInDiet }) =>
  isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
`;

export const Image = styled.Image`
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
