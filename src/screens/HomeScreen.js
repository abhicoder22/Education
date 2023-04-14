import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Button title="Courses" onPress={() => navigation.navigate('Course')} />
      </View>
      <View style={{marginTop: 15}}>
        <Button
          title="ColorScreen"
          onPress={() => navigation.navigate('Color')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
