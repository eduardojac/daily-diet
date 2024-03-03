import { Container } from './styles';
import { Header } from '@components/Header';
import { Card } from '@components/Card';
import { Text } from '@components/Text';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';
import { Alert, FlatList, View } from 'react-native';
import { MealCard } from '@components/MealCard';
import { ListEmpty } from '@components/ListEmpty';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { getAllMeals } from '@storage/meal/getAllMeals';
import { MealProps } from '@storage/storage.config';
import { getMealStats } from '@storage/meal/getMealStats';


export function Home() {
    const dietDescription = 'das refeições dentro da dieta';

    const textTitle = 'Refeições';
    const buttonTitle = 'Nova refeição';

    const navigation = useNavigation();

    const [mealList, setMealList] = useState<MealProps[]>([]);
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
            const data = await getAllMeals();
            const mealStats = await getMealStats();
            setMealList(data);
            setMealStats(mealStats);
        } catch (error) {
            Alert.alert("Não foi possível carregar a lista de refeições!");
        } finally {
            setIsLoading(false);
        }

    }

    function handleNewMeal() {
        navigation.navigate("form");
    }

    function handleMealStats() {
        const params: any = mealList;
        navigation.navigate("stats", params);
    }

    function handleMealDescription(item: any) {
        navigation.navigate("description", item);
    }

    const GroupedList = ({ data, renderItem }: any) => {
        const groupedData = data.reduce((meals: any, item: any) => {
            const { date } = item;

            if (!meals[date]) {
                meals[date] = [];
            }

            meals[date].push(item);

            return meals;
        }, {});

        const renderGroup = ({ item }: any) => (
            <View>
                <Text title={item.key}></Text>
                {renderItem(item.data)}
            </View>
        );

        const groupsArray = Object.entries(groupedData).map(([date, data]) => ({
            key: date,
            data,
        }));

        return (
            <FlatList
                data={groupsArray}
                renderItem={renderGroup}
                keyExtractor={(item) => item.key}
                ListEmptyComponent={() => (
                    <ListEmpty message="Que tal cadastrar a primeira refeição?" />
                )}
            />
        );
    };

    const renderItem = (data: any) => (
        <>
            {data.map((item: any) => (
                <MealCard
                    item={item}
                    key={item.key}
                    onPress={() => handleMealDescription(item)} isInDiet={item.isInDiet} />
            ))}

        </>

    );

    return (
        <Container>
            <Header />
            <Card
                title={mealStats}
                subtitle={dietDescription}
                onPress={handleMealStats}
                dietRange={mealStats}
            />
            <Text
                title={textTitle}
            />
            <Button
                title={buttonTitle}
                icon='add'
                type='PRIMARY'
                onPress={handleNewMeal}
            />
            {
                isLoading ? <Loading /> :
                    <GroupedList data={mealList} renderItem={renderItem} />
            }
        </Container>
    )

}



