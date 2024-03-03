import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, Title, Form, Header, Icon, BackButton, FormText, RowView, YesIcon, NoIcon, YesButton, NoButton, YesNoText } from "./styles";
import { View } from "react-native";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { editMeal } from "@storage/meal/editMeal";

type RouteParams = {
    item: any;
}

export function EditMeal({ ...rest }) {
    const route = useRoute();
    const item: any = route.params as RouteParams;
    const navigation = useNavigation();
    const [yesClick, setYesClick] = useState(item.isInDiet ? true : false);
    const [noClick, setNoClick] = useState(!item.isInDiet ? true : false);

    const initialMeal = item;

    const [meal, setMeal] = useState(item);

    const onYesClick = () => {
        setYesClick(true);
        setNoClick(false);
        handleChangeMealIndicator(true);
    }

    const onNoClick = () => {
        setYesClick(false);
        setNoClick(true);
        handleChangeMealIndicator(false);
    }

    async function handleMealEdit() {
        await editMeal(initialMeal, meal);
        navigation.navigate("home");
    }

    function formatDate(input: string) {
        // Remove caracteres não numéricos
        const cleaned = ('' + input).replace(/\D/g, '');

        // Formata a data no formato dd/mm/yyyy
        const match = cleaned.match(/^(\d{2})(\d{2})(\d{4})$/);
        if (match) {
            return match[1] + '.' + match[2] + '.' + match[3];
        }

        return input;
    };

    function formatTime(input: string) {
        // Remove caracteres não numéricos
        const cleaned = ('' + input).replace(/\D/g, '');

        // Formata a data no formato dd/mm/yyyy
        const match = cleaned.match(/^(\d{2})(\d{2})$/);
        if (match) {
            return match[1] + ':' + match[2];
        }

        return input;
    };

    function handleChangeMealName(name: string) {
        const newMeal = {
          ...meal,
          name,
        };
    
        setMeal(newMeal);
      };
    
      function handleChangeMealDescription(description: string) {
        const newMeal = {
          ...meal,
          description,
        };
    
        setMeal(newMeal);
      };
 
      function handleChangeMealDate(date: string) {
        const formattedDate = formatDate(date);
        const newMeal = {
          ...meal,
          date: formattedDate,
        };
        
        setMeal(newMeal);
      };
    
      function handleChangeMealTime(time: string) {
        const formattedTime = formatTime(time);
        const newMeal = {
          ...meal,
          time: formattedTime,
        };
    
        setMeal(newMeal);
      };

      function handleChangeMealIndicator(isInDiet: boolean) {
        const newMeal = {
          ...meal,
          isInDiet,
        };
    
        setMeal(newMeal);
      };

    return (
        <Container {...rest}>
            <Header>
                <BackButton
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                    />

                </BackButton>
                <Title>Editar refeição</Title>
            </Header>
            <Form>
                <Input
                    title="Nome"
                    value={meal.name}
                    onChangeText={(text) => handleChangeMealName(text)}
                />
                <Input
                    height="2x"
                    multiline={true}
                    title="Descrição"
                    numberOfLines={4}
                    value={meal.description}
                    style={{ textAlignVertical: "top" }}
                    onChangeText={(text) => handleChangeMealDescription(text)}
                />

                <View
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Input
                        title="Data"
                        width="0.5x"
                        value={meal.date}
                        onChangeText={(text) => handleChangeMealDate(text)}
                        maxLength={10}
                    />
                    <Input
                        title="Hora"
                        width="0.5x"
                        value={meal.time}
                        onChangeText={(text) => handleChangeMealTime(text)}
                        maxLength={5}
                    />
                </View>

                <FormText>Está dentro da dieta?</FormText>

                <RowView>
                    <YesButton
                        onPress={onYesClick}
                        click={yesClick}
                    >
                        <YesIcon />
                        <YesNoText>Sim</YesNoText>
                    </YesButton>
                    <NoButton
                        onPress={onNoClick}
                        click={noClick}>
                        <NoIcon />
                        <YesNoText>Não</YesNoText>
                    </NoButton>

                </RowView>

                <Button
                    onPress={handleMealEdit}
                    title="Salvar Alterações"
                    type="PRIMARY"

                />
            </Form>
        </Container>

    )
}