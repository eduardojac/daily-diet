import styled, { css } from "styled-components/native";

export type ContainerProps = {
  width: "0.5x" | "1x";
  height: "1x" | "2x";
};

export const Container = styled.View<ContainerProps>`
  width: ${({ width }) => (width === "1x" ? "100%" : "47%")};
  height: ${({ height }) => (height === "1x" ? "65px" : "140px")};
  margin-top: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const TextInput = styled.TextInput`
  width: 100%;
  border: 1px solid #dddedf;
  border-radius: 6px;
  flex: 1;
  margin-top: 5px;
  padding: 5px;
`;