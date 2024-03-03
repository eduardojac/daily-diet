import { Container, Title, TextInput } from "./styles";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  title: String;
  width?: "0.5x" | "1x";
  height?: "1x" | "2x";
}

export const Input = ({
  title,
  height = "1x",
  width = "1x",
  ...rest
}: InputProps) => {
  return (
    <Container height={height} width={width}>
      <Title>{title}</Title>
      <TextInput {...rest} />
    </Container>
  );
};