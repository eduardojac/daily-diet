import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, Title, Icon, BackButton, Header, Description, BoldText, MealView } from "./styles";
import { Alert } from "react-native";
import { Button } from "@components/Button";
import { MealTag } from "@components/MealTag";
import { removeMeal } from "@storage/meal/removeMeal";

type RouteParams = {
    item: any;
}

export function MealDescription({ ...rest }) {
    const navigation = useNavigation();
    const route = useRoute();
    const item: any = route.params as RouteParams;

    function handleEditMeal() {
        navigation.navigate("edit", item);
    }

    function handleRemoveMeal() {
        Alert.alert(
            "Remover refeição",
            `Deseja remover a refeição "${item.name}"?`,
            [
                { text: "Sim", onPress: async () => (
                    await removeMeal(item),
                    navigation.navigate("home")
                ) },
                { text: "Não", style: "cancel" },
            ]
        );
    };


    return (
        <Container {...rest} isInDiet={item.isInDiet}>
            <Header>
                <BackButton
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                    />

                </BackButton>
                <Title>Refeição</Title>
            </Header>
            <MealView>
                <Title>{item.name}</Title>
                <Description>{item.description}</Description>
                <BoldText>Data e Hora</BoldText>
                <Description>{item.date} às {item.time}</Description>
                <MealTag isInDiet={item.isInDiet} />

                <Button title={"Editar Refeição"} icon="edit" type="PRIMARY"  onPress={() => handleEditMeal()}/>
                <Button title={"Excluir Refeição"} icon="delete" onPress={() => handleRemoveMeal()} />

            </MealView>


        </Container>

    )
}