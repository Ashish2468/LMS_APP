import React, {Component} from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants';

class PopularCategory extends Component {
  state = {
    names: [
      {name: 'Development', id: 1},
      {name: 'Teaching', id: 2},
      {name: 'Computer', id: 3},
      {name: 'Teaching', id: 4},
      {name: 'Computer', id: 5},
      {name: 'Development', id: 6},
      {name: 'Teaching', id: 7},
      {name: 'Computer', id: 8},
      {name: 'Development', id: 9},
      {name: 'Computer', id: 10},
      {name: 'Teaching', id: 11},
      {name: 'Development', id: 12},
    ],
  };
  render() {
    return (
      <View>
        <Text style={styles.top}>Popular category in our platform</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {this.state.names.map((item, index) => (
            <ImageBackground
              source={require('../assets/imgs/imgIMG.png')}
              resizeMode="cover"
              style={styles.image}>
              <TouchableOpacity
                onPress={() => alert('You choose ' + item.name)}>
                <View key={item.id} style={styles.item}>
                  <Text style={styles.itemname1}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          ))}
        </ScrollView>
        <TouchableOpacity onPress={() => alert('Its an alert')}>
          <View style={styles.opacity}>
            <Text style={styles.seemore}>see more</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default PopularCategory;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 30,
    // margin: 2,

    // marginHorizontal:50,
  },
  opacity: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 10,
  },
  image: {
    flex: 1,
    height: 130,
    width: 160,
    marginRight: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemname1: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'left',
    marginTop: 70,
    color: colors.white,
  },
  top: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: -0,
    color: '#111',
    marginBottom: 10,
  },
  seemore: {
    fontWeight: '900',
    color: '#1A21BC',
    fontSize: 18,
    marginLeft: 10,
  },
});
