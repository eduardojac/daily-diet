import { Circle } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 144px;
  height: 34px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 250px;
`;

export const Text = styled.Text`
    margin-left: 10px;
`;

export const Icon = styled(Circle).attrs(({ theme, isInDiet }) => ({
    size: 10,
    color: isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    weight: "fill",
  }))``;