import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import RNFS from 'react-native-fs';
const ContactScreen = ({navigation}) => {
  const [contactsData, setcontactsData] = useState([]);
  useEffect(() => {
    const filePath =
      '/Users/Xsparky/ReactNativeProjects/TestAppp/breatheappnew/src/Helper/sample.txt';
    try {
      RNFS.readFile(filePath, 'utf8')
        .then(res => setcontactsData(JSON.parse(res)))
        .catch(error => console.log(error, 'error'));
    } catch (error) {
      console.log('Error writing to file:', error.message);
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contactsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('ContactViewScreen', {data: item})
            }>
            <View style={styles.ViewContainer}>
              <View style={styles.innerConatiner}>
                <View style={styles.imageConatiner}>
                  <Image
                    style={styles.imageStyle}
                    source={{
                      uri: item.imageUrl,
                    }}
                  />
                </View>
                <View style={styles.NameContainer}>
                  <Text style={styles.namestyle}>{item.name}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ViewContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#C2C2C2',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  innerConatiner: {flexDirection: 'row'},
  imageConatiner: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {height: 50, width: 50, borderRadius: 30},
  NameContainer: {
    width: '60%',
    marginLeft: 5,
    justifyContent: 'center',
    padding: 10,
  },
  namestyle: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'italic',
  },
});
export default ContactScreen;
