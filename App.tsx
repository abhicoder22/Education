import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CourseScreen from './src/screens/CourseScreen';
import CourseDetails from './src/screens/CourseDetails';
import Dialog from './src/screens/Dialog';
import ColorScreen from './src/screens/ColorScreen';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="home">
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Course" component={CourseScreen} />
        <stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{headerTitleAlign: 'center'}}
        />
        <stack.Screen
          name="Dialog"
          component={Dialog}
          options={{headerTitleAlign: 'center'}}
        />
        <stack.Screen name="Color" component={ColorScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
