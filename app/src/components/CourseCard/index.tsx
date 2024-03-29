import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import {Icons} from '../../theme';
import {CourseCardProps} from './types';

const CourseCard: FC<CourseCardProps> = ({
  title,
  totalStudent,
  image,
  onBookmarkPress,
  onPress,
  originalPrice,
  price,
  ratingAvg,
  category,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPress}>
      <TouchableOpacity
        style={{position: 'absolute', right: 10, top: 10}}
        onPress={onBookmarkPress}>
        <Image style={styles.bookMark} source={Icons.BookmarkOutline} />
      </TouchableOpacity>
      <View style={{overflow: 'hidden'}}>
        <Image
          source={{uri: image}}
          resizeMode="cover"
          style={styles.courseImage}
        />
      </View>
      <View style={{width: '60%'}}>
        <View style={styles.tagContainer}>
          <Text style={styles.tagText} numberOfLines={1}>
            {category}
          </Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.priceWrapper}>
          <Text style={styles.offerPrice}>₹{price}</Text>
          <Text style={styles.originalPrice}>₹{originalPrice}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Icons.Star} style={styles.ratingIcon} />
          <Text style={styles.ratingText}>
            {ratingAvg.toFixed(1)} | {totalStudent} students
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
