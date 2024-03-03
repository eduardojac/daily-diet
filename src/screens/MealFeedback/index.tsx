import { Container, Description, Title, Image, BoldText } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

import insideDiet from "../../assets/insideDiet.png";
import outDiet from "../../assets/outDiet.png";
import { Button } from '@components/Button';

type RouteParams = {
    isInDiet: boolean;
}

export function MealFeedback({ ...rest }) {

    const navigation = useNavigation();
    const route = useRoute();
    const { isInDiet } = route.params as RouteParams;

    function goBackHome() {
        navigation.navigate("home");
    }

    return (
        <Container {...rest}>
            <Title isInDiet={isInDiet}>

                {isInDiet ? "Continue assim!" : "Que pena!"}
            </Title>
            {isInDiet ? (
                <Description>
                    Você continua <BoldText>dentro da dieta.</BoldText> Muito bem!
                </Description>
            ) : (
                <Description>
                    Você <BoldText>saiu da dieta </BoldText>dessa vez, mas continue se esforçando e não desista!
                </Description>
            )}

            <Image source={isInDiet ? insideDiet : outDiet} />
            <Button
                onPress={goBackHome}
                title="Ir para a página inicial"
                type='PRIMARY'
            />
        </Container>

    )

}
