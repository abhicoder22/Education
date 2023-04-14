import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CourseApi from '../api/CourseApi';
import {showDialog} from './Dialog';

const CourseDetails = ({navigation, route}) => {
  const id = route.params.courseId;

  const selectedCourse = CourseApi.find(element => {
    return id == element.id;
  });
  return (
    <View style={styles.mainView}>
      <View style={styles.courseView}>
        <View>
          <Image
            style={styles.ImageStyle}
            source={selectedCourse.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.titleStyle}>{selectedCourse.title}</Text>

        <Text style={styles.descriptionStyle}>
          {selectedCourse.description}
        </Text>

        <View style={{height: '10%'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dialog')}
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
    </View>
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

export default CourseDetails;
