import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CourseApi from '../api/CourseApi';

const CourseScreen = ({navigation}) => {
  const courseCard = ({item}) => { 
    return (
      <View style={styles.mainView}>
        <View style={styles.courseView}>
          <View> 
            <Image
              style={styles.ImageStyle}
              source={item.image}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.titleStyle}>{item.title}</Text>

          <Text style={styles.descriptionStyle}>{item.description}</Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CourseDetails', {
                courseId: item.id,
              })
            }
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: 'skyblue',
              paddingVertical: 10,
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Course details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={CourseApi}
      renderItem={courseCard}
    />
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  mainView: {
    paddingHorizontal: 20,
  },
  courseView: {
    padding: 30,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 30,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    shadowOffset: {height: 0, width: 0},
  },
  titleStyle: {
    fontSize: 22,
    textTransform: 'uppercase',
    color: '#344055',
    textAlign: 'center',
    paddingBottom: 15,
  },
  descriptionStyle: {
    textAlign: 'left',
    fontSize: 18,
    lineHeight: 20,
    paddingBottom: 15,
    color: '#344055',
  },
});

export default CourseScreen;
