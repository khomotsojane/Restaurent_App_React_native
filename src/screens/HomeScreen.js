import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity } from 'react-native';

import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';

const restaurants = [
  {
    name: 'Roasted Chicken ',
    categories: 'Fried meal',
    price: 'R80',
    image: require('../../assets/Chicken.jpeg'),
    id: 1,
  },
  {
    name: 'Roasted Wings',
    categories: 'Fried meal',
    price: 'R40',
    image: require('../../assets/Wings.jpeg'),
    id: 2,
  },
  {
    name: 'Pap & Vors',
    categories: 'Fried meal',
    price: 'R40',
    image: require('../../assets/Vors.jpeg'),
    id: 3,
  },
  {
    name: 'Pap & Steak',
    categories: 'Fried meal',
    price: 'R40',
    image: require('../../assets/Steak.jpeg'),
    id: 4,
  }
];

const restaurant = [
  {
    name: 'Pap & Menatlana ',
    categories: 'African meal',
    price: 'R25',
    image: require('../../assets/Menatlana.jpeg'),
    id: 1,
  },
  {
    name: 'Pap & cooked vors',
    categories: 'Fried meal',
    price: 'R25',
    image: require('../../assets/Cookedvors.jpeg'),
    id: 2,
  },
  {
    name: 'Pap & Mogodu',
    categories: 'African meal',
    deliveryTime: '35 min',
    price: 'R35',
    image: require('../../assets/Mogodu.jpeg'),
    id: 3,
  },
  {
    name: 'Pap & Steak',
    categories: 'Fried meal',
    price: 'R25',
    image: require('../../assets/Steak.jpeg'),
    id: 4,
  }
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header label="Pap corner" />
      {/* <RestaurantCard /> */}
      
     <Text style={{textAlign: 'left', fontSize: 30}}>Fried meal</Text>
      <FlatList
        data={restaurants}
        
        renderItem={({ item }) => {
          return <RestaurantCard info={item} />
        }}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <Text style={{fontSize: 30}}>African meal</Text>
      <FlatList
        data={restaurant}
        renderItem={({ item }) => {
          return <RestaurantCard info={item} />
        }}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE6D9',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default HomeScreen;
