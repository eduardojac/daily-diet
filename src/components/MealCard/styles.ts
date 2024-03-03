import { Circle } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonIconIsInDietStyleProps = true | false;

type Props = {
  isIndiet: ButtonIconIsInDietStyleProps;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  margin-top: 10px;

  border-top-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;

  border-top-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-left-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_5};

  border-radius: 5px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-left: 10px;
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Divider = styled.Text`
  ${({ theme }) => css`
    margin-left: 10px;
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_4};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    margin-left: 10px;
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    
  `};
`;

export const Icon = styled(Circle).attrs<Props>(({ theme, isInDiet }) => ({
  size: 18,
  color: isInDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  weight: "fill",
}))`
  right: 10px;
  position: absolute;
`;
