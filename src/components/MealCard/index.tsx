import { TouchableOpacityProps } from "react-native";
import { Container, Description, Divider, Icon, Title } from "./styles";

type Meal = {
  time: string;
  name: string;
}

type Props = TouchableOpacityProps & {
  item: Meal
  isInDiet: boolean
}

export function MealCard({ item, isInDiet, ...rest }: Props) {

  const maximoDeCaracteresParaOTexto = 26;

  let formatedMeal = '';

  if (item.name) {
    formatedMeal = item.name.length > maximoDeCaracteresParaOTexto ? item.name.slice(0, 23) + '...' : item.name;
  }
  
  return (
    <Container {...rest}>
      <Title>
        {item.time}
      </Title>
      <Divider>
        |
      </Divider>
      <Description>
        {formatedMeal}
      </Description>
      <Icon
        isInDiet={isInDiet}
      />
      <Title>

      </Title>
    </Container>
  )
}