import { StyleSheet, FlatList } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import restaurantsData from '../../../assets/data/restaurants.json';

export default function HomeScreen() {
  return (
      <FlatList
        data={restaurantsData}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
  );
}

const styles = StyleSheet.create({});
