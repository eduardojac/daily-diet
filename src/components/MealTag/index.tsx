import { Container, Icon, Text } from "./styles";

type Props = {
  isInDiet: boolean;
};

export function MealTag({ isInDiet }: Props) {
  return (
    <Container>
      <Icon isInDiet={isInDiet} />
      <Text>{isInDiet ? "dentro da dieta" : "fora da dieta"}</Text>
    </Container>
  );
};