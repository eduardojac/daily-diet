import { useState, useCallback } from "react";

import {
  Container,
  Header,
  ReturnButton,
  StatsText,
  StatsTitle,
  ReturnIcon,
  Stats,
  StatsSubtitle,
  InfoBlock,
  InfoTitle,
  InfoView,
  InDietView,
  OutDietView,
  InOutDietBlock,
} from "./styles";

import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import { Loading } from "@components/Loading";
import { getMealStats } from "@storage/meal/getMealStats";
import { Alert } from "react-native";

type RouteParams = {
  item: any;
}

export const MealStats = ({ ...rest }) => {

  const navigation = useNavigation();

  const route = useRoute();
  const params: any = route.params as RouteParams;

  const inDiet = params.filter((param: { isInDiet: any; }) => param.isInDiet).length;
  const outDiet = params.length - inDiet;

  const [mealStats, setMealStats] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  async function fetchData() {
    try {
      setIsLoading(true);
      const mealStats = await getMealStats();
      setMealStats(mealStats);
    } catch (error) {
      Alert.alert("Não foi possível carregar a lista de refeições!");
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <Container mealStats={mealStats}>
      <Header>
        <StatsTitle>{mealStats}</StatsTitle>
        <StatsText>das refeições dentro da dieta</StatsText>
        <ReturnButton onPress={() => navigation.goBack()}>
          <ReturnIcon mealStats={mealStats} />
        </ReturnButton>
      </Header>

      {isLoading ? (
        <Loading />
      ) : (
        <Stats>
          <StatsSubtitle>Estatísticas Gerais</StatsSubtitle>
          
          <InfoBlock>
            <InfoTitle>{params.length}</InfoTitle>
            <InfoView>refeições registradas</InfoView>
          </InfoBlock>

          <InOutDietBlock>
            <InDietView>
              <InfoTitle>{inDiet}</InfoTitle>
              <InfoView>refeições dentro da dieta</InfoView>
            </InDietView>

            <OutDietView>
              <InfoTitle>{outDiet}</InfoTitle>
              <InfoView>refeições fora da dieta</InfoView>
            </OutDietView>
          </InOutDietBlock>
        </Stats>
      )}
    </Container>
  );
};


