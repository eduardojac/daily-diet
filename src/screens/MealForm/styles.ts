import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { ArrowLeft, Circle } from "phosphor-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  click: boolean;
};

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 24px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_1,
}))`
  position: absolute;
  right: 50px;
`;

export const FormText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-top: 25px;
  margin-bottom: 5px;
`;

export const RowView = styled.View`
  flex-direction: row;
`;

export const YesIcon = styled(Circle).attrs(({ theme }) => ({
  size: 10,
  color: theme.COLORS.GREEN_DARK,
  weight: "fill",
}))``;

export const NoIcon = styled(Circle).attrs(({ theme }) => ({
  size: 10,
  color: theme.COLORS.RED_DARK,
  weight: "fill",
}))``;

export const YesButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  border-radius: 5px;
  background-color: ${({ theme, click }) =>
    click ? theme.COLORS.GREEN_MID : theme.COLORS.GRAY_6};
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

export const NoButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  border-radius: 5px;
  background-color: ${({ theme, click }) =>
    click ? theme.COLORS.RED_MID : theme.COLORS.GRAY_6};
  border-top-width: ${({ click }) => (click ? 1 : 0)}px;
  border-left-width: ${({ click }) => (click ? 1 : 0)}px;
  border-right-width: ${({ click }) => (click ? 1 : 0)}px;
  border-bottom-width: ${({ click }) => (click ? 1 : 0)}px;
  border-color: ${({ theme }) => theme.COLORS.RED_DARK};
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-left: 10px;
`;

export const YesNoText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-left: 10px;
`;
