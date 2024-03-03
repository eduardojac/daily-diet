import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.TouchableOpacity`
  height: 102px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  background-color: ${({ theme, dietRange }) => parseInt(dietRange) > 70 ? theme.COLORS.GREEN_MID  : theme.COLORS.RED_MID};
  border-radius: 10px;
`;  

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme, dietRange }) => ({ 
  color: parseInt(dietRange) > 70 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute;
  padding-top: 70px;
  right: 5px;
  bottom: 51px;
`;
