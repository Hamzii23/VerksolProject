import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import RNFS from 'react-native-fs';

const NewContactScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [ContactList, setContactList] = useState([]);
  useEffect(() => {
    const filePath =
      '/Users/Xsparky/ReactNativeProjects/TestAppp/breatheappnew/src/Helper/sample.txt';
    try {
      RNFS.readFile(filePath, 'utf8')
        .then(res => setContactList(JSON.parse(res)))
        .catch(error => console.log(error, 'error'));
    } catch (error) {
      console.log('Error writing to file:', error.message);
    }
  });
  const PushHandler = async () => {
    const newContact = {
      name: name,
      phone: phoneNo,
      imageUrl:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg',
    };

    const updatedContactList = [...ContactList, newContact];
    // console.log(updatedContactList, '===>');
    const filePath =
      '/Users/Xsparky/ReactNativeProjects/TestAppp/breatheappnew/src/Helper/sample.txt';
    console.log(filePath);

    try {
      RNFS.writeFile(filePath, JSON.stringify(updatedContactList), 'utf8')
        .then(res => console.log(res, 'respose'))
        .catch(error => console.log(error, 'error'));

      // Additional logic or navigation here...
    } catch (error) {
      console.log('Error writing to file:', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerConatiner}>
        <Text style={styles.title}>Name</Text>
        <TextInput
          placeholder="Muhammad Hamza"
          style={styles.textInputStyle}
          value={name}
          onChangeText={text => {
            setName(text);
          }}
        />
      </View>
      <View style={styles.innerConatiner}>
        <Text style={styles.title}>Contact Number</Text>
        <TextInput
          placeholder="03451111111"
          keyboardType="number-pad"
          style={styles.textInputStyle}
          value={phoneNo}
          onChangeText={text => {
            setPhoneNo(text);
          }}
        />
      </View>
      <TouchableOpacity activeOpacity={0.7} onPress={PushHandler}>
        <View style={styles.saveButton}>
          <Text style={styles.saveNowText}>Save Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  innerConatiner: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 10,
    height: 'auto',
    justifyContent: 'center',
  },
  textInputStyle: {
    width: '100%',
    backgroundColor: '#C2C2C2',
    borderWidth: 1,
    borderColor: 'grey',
    height: 40,
    borderRadius: 3,
    padding: 10,
  },
  title: {fontStyle: 'normal', fontWeight: '500'},
  saveButton: {
    marginTop: 20,
    alignSelf: 'center',
    width: '30%',
    backgroundColor: 'red',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveNowText: {color: '#fff', fontSize: 17, fontWeight: '500'},
});
export default NewContactScreen;
