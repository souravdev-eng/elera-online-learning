import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icons} from '../../theme';
import FilterCard from '../FilterCard';
import {RatingTags} from '../../assets/data/rating.data';
import ViewAll from '../ViewAll';
import ReviewCard from '../ReviewCard';

const CourseReview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Feedback</Text>
      <ViewAll
        star
        style={styles.viewAllContainer}
        title="4.8 (4,479 reviews)"
        // onPress={() => navigation.navigate('MostPopularCourse')}
      />
      <ScrollView horizontal>
        {RatingTags.map(el => (
          <FilterCard
            star
            key={el}
            title={el}
            isActive={el === 'All' ? true : false}
          />
        ))}
      </ScrollView>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </View>
  );
};

export default CourseReview;
