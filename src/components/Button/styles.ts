import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';


export const Container = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 56px;
  max-height: 56px;
  width: 100%;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE };
  border-radius: 5px;
  margin-top: 10px;
  border-width: 1px;
`;

export const AddIcon = styled(Plus).attrs(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
}))``;

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
}))``;

export const DeleteIcon = styled(Trash).attrs(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
}))``;

export const Title = styled.Text`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    margin-left: 10px;
  `};
`;