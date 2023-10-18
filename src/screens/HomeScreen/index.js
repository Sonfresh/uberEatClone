import { StyleSheet, FlatList, View } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import restaurantsData from '../../../assets/data/restaurants.json';

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurantsData}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
      
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
