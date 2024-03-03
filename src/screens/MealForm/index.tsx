import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Title, Form, Header, Icon, BackButton, FormText, RowView, YesIcon, NoIcon, YesButton, NoButton, YesNoText} from "./styles";
import { Alert, View } from "react-native";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { MealProps } from "@storage/storage.config";
import { addNewMeal } from "@storage/meal/addMeal";

export function MealForm({ ...rest }) {
  const navigation = useNavigation();

  const [yesClick, setYesClick] = useState(true);
  const [noClick, setNoClick] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');
  const [formattedTime, setFormattedTime] = useState('');
  const [meal, setMeal] = useState<MealProps>(
    {name: '', description: '', date: '', time: '', isInDiet: true } as MealProps
    );

  const handleChangeName = (name: string) => {
    const newMeal = {
      ...meal,
      name,
    };

    setMeal(newMeal);
  };

  const handleChangeDescription = (description: string) => {
    const newMeal = {
      ...meal,
      description,
    };

    setMeal(newMeal);
  };

  function formatDate(input: string) {
    // Remove caracteres não numéricos
    const cleaned = ('' + input).replace(/\D/g, '');

    // Formata a data no formato dd.mm.yyyy
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{4})$/);
    if (match) {
      return match[1] + '.' + match[2] + '.' + match[3];
    }

    return input;
  };

  function formatTime(input: string) {
    // Remove caracteres não numéricos
    const cleaned = ('' + input).replace(/\D/g, '');

    // Formata a hora no formato 12:00
    const match = cleaned.match(/^(\d{2})(\d{2})$/);
    if (match) {
      return match[1] + ':' + match[2];
    }

    return input;
  };

  function handleChangeDate(text: string) {
    const formattedText = formatDate(text);
    setFormattedDate(formattedText);

    const newMeal = {
      ...meal,
      date: formattedText,
    };

    setMeal(newMeal);
  };

  function handleChangeTime(text: string) {
    const formattedText = formatTime(text);
    setFormattedTime(formattedText);

    const newMeal = {
      ...meal,
      time: formattedText,
    };

    setMeal(newMeal);
  };

  const onYesClick = () => {
    setYesClick(true);
    setNoClick(false);

    const newMeal = {
      ...meal,
      isInDiet: true,
    };

    setMeal(newMeal);
  }

  const onNoClick = () => {
    setYesClick(false);
    setNoClick(true);

    const newMeal = {
      ...meal,
      isInDiet: false,
    };

    setMeal(newMeal);
  }

  function handleMealFeedback() {
    const params: any = { isInDiet: yesClick ? true : false }
    navigation.navigate("feedback", params);
  }

  async function handleAddMeal() {
    if (meal.name.trim() == "" || meal.description.trim() === "" || meal.date.trim() == "" || meal.time.trim() == "") {
      Alert.alert("Campos obrigatórios não preenchidos!");
      return;
    }

    const newMeal = {
      ...meal,
      key: Math.random().toString(),
    }

    try {
      await addNewMeal(newMeal);
      setMeal({} as MealProps);

      handleMealFeedback();
      
    } catch (error) {
      Alert.alert("Não foi possível cadastrar a refeição");
    }

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
        <Title>Nova refeição</Title>
      </Header>
      <Form>
        <Input
          title="Nome"
          onChangeText={(text) => handleChangeName(text)}
        />
        <Input
          height="2x"
          multiline={true}
          title="Descrição"
          numberOfLines={4}
          style={{ textAlignVertical: "top" }}
          onChangeText={(text) => handleChangeDescription(text)}
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
            value={formattedDate}
            onChangeText={handleChangeDate}
            maxLength={10}

          />
          <Input
            title="Hora"
            width="0.5x"
            value={formattedTime}
            onChangeText={handleChangeTime}
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
          onPress={handleAddMeal}
          title="Cadastrar refeição"
          type="PRIMARY"

        />
      </Form>
    </Container>

  )
}