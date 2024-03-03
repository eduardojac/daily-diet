import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Subtitle, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    subtitle: string;
    dietRange: string
  }

export function Card( {title, subtitle, dietRange, ...rest}: Props ) {

    return (
        <Container dietRange={dietRange} {...rest}>
            <Icon dietRange={dietRange} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}