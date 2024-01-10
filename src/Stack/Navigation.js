import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ContactScreen from '../Screens/ContactList';
import ContactViewScreen from '../Screens/ContactView';
import {Image, TouchableOpacity, View} from 'react-native';
import NewContactScreen from '../Screens/NewConatct';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();
const NavigationStack = props => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="ContactScreen">
      <Stack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('NewContactScreen')}>
              <View style={{alignItems: 'center', marginRight: 10}}>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dKrcBbxFmcLFg2kOMYtBFjuPV-BVnboAGw&usqp=CAU',
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    marginLeft: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="ContactViewScreen" component={ContactViewScreen} />
      <Stack.Screen name="NewContactScreen" component={NewContactScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
