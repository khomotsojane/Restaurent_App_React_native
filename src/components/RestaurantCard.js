import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import IconLabel from './IconLabel';
import { Button } from 'react-native-elements';

const iconColor = 'white';
const RestaurantCard = ({ info }) => {
  const { name, categories, deliveryTime, price, image } = info;

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
      <TouchableOpacity>
      <Image style={styles.imageStyle} source={image} />
      </TouchableOpacity>
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>{name}</Text>


          <View style={styles.iconLabelStyle}>
          <TouchableOpacity style={{ marginTop: -10,backgroundColor:'#FFE6D9',height:35}}>
            <Text style={{color:'black', margin:5}}>Add to bag</Text>
        </TouchableOpacity>
        <Text style={{marginTop: -10, marginLeft: 20, fontSize: 20}}>{price}</Text>
          </View>
        </View>
      
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 30,
    alignItems: 'center',
    marginTop: 25,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#E8A392',
    height: 200,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 130,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
  },
  categoryStyle: {
    fontWeight: '200',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default RestaurantCard;


//onPress={() => Addtobag()}
