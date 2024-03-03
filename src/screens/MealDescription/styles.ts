import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme, isInDiet }) =>
    isInDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const MealView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const Image = styled.Image`
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const BoldText = styled.Text`
  margin-top: 15px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_1,
}))`
  position: absolute;
  right: 50px;
`;

export const MealTag = styled.View`
  flex: 1;
  border-radius: 5px;
  background-color: ${({ theme }) =>theme.COLORS.GRAY_6};
  border-top-width: ${({ click }) => (click ? 1 : 0)}px;
  border-left-width: ${({ click }) => (click ? 1 : 0)}px;
  border-right-width: ${({ click }) => (click ? 1 : 0)}px;
  border-bottom-width: ${({ click }) => (click ? 1 : 0)}px;
  border-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-bottom: 30px;
`;
