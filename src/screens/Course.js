import React from 'react';
import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  // TextInput,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {
  ImageBackgrounds,
  Loginbutton,
  Mybutton,
  Socialbutton,
  Toinput,
} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Course({navigation}) {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          alignItems: 'center',
          marginTop: -10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="left" size={25} color="#000" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '500',
            color: colors.black,
            alignSelf: 'center',
            marginLeft: 7,
          }}>
          Course Details
        </Text>
        <Text></Text>
      </View>
      <View>
        <ImageBackground
          source={require('../assets/imgs/Rectangle981phptp.png')}
          resizeMode="cover"
          style={styles.image}>
          <View>
            <Image
              source={require('../assets/imgs/Group10786phptp.png')}
              resizeMode="cover"
              style={{
                height: 50,
                width: 50,
                borderRadius: 5,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: colors.white,
                alignSelf: 'center',
                marginTop: 7,
              }}>
              Have a look at course
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{padding: 10}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '500',
            color: colors.black,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            marginTop: 10,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id suscipit
          at rutrum ultricies. Ut vitae elit nisi, quis tortor porta. Gravida
          donec porttitor a faucibus.{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: '#111',
              }}>
              Trainer Name
            </Text>
            <Text>Ratings Stuff</Text>
          </View>
          <View>
            <View style={styles.sellerbox}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: '#111',
                }}>
                Bestseller
              </Text>
            </View>
            <Text>30,000 Learners</Text>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 150,
    width: '100%',
    paddingHorizontal: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
  },
  sellerbox: {
    backgroundColor: '#FFF06B',
    justifyContent: 'center',
    alignItems: 'center',
    height: 23,
    width: 90,
  },
});
