import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
const ContactViewScreen = ({route, navigation}) => {
  const {data} = route.params;
  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerConatiner}>
        <View style={styles.imageView}>
          <Image
            style={styles.imageProperties}
            source={{
              uri: data.imageUrl,
            }}
          />
        </View>
        <View style={styles.NameView}>
          <Text style={styles.title}>{data.name}</Text>
        </View>
        <View style={styles.iconView}>
          <View style={styles.iconViewInnerConatiner}>
            <Image
              source={{
                uri: 'https://www.shutterstock.com/image-vector/call-icon-trendy-flat-style-260nw-673948819.jpg',
              }}
              style={styles.imageStyle}
            />
            <Text style={styles.iconText}>Call</Text>
          </View>
          <View style={styles.iconViewInnerConatiner}>
            <Image
              source={{
                uri: 'https://t4.ftcdn.net/jpg/03/08/43/19/360_F_308431972_g5fuiXwgOZpDCMFQougq13hgSaQVHVro.jpg',
              }}
              style={styles.imageStyle}
            />
            <Text style={styles.iconText}>Message</Text>
          </View>
          <View style={styles.iconViewInnerConatiner}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/474x/44/be/b3/44beb3c457a01f0a4a4f0d9ede6af2f4.jpg',
              }}
              style={styles.imageStyle}
              resizeMode="cover"
            />
            <Text style={styles.iconText}>Video Call</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View>
          <Text>Contact Info</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
  },
  innerConatiner: {flex: 0.7},
  imageView: {
    alignItems: 'center',
    flex: 0.6,
    justifyContent: 'center',
  },
  imageProperties: {width: 130, height: 130, borderRadius: 100},
  NameView: {alignItems: 'center', marginTop: 5},
  title: {fontSize: 19, fontWeight: '600', fontStyle: 'italic'},
  iconView: {
    flexDirection: 'row',
    marginTop: '10',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 0.4,
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  iconViewInnerConatiner: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconText: {fontSize: 15, fontWeight: '500'},
});
export default ContactViewScreen;
