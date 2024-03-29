import {View, FlatList} from 'react-native';
import React from 'react';

import {useAppSelector} from '../../hooks/useRedux';
import {Icons} from '../../theme';

import CourseCard from '../../components/CourseCard';
import FilterCard from '../../components/FilterCard';
import GoBack from '../../components/GoBack';
import {Tags} from '../../assets/data/tagData';

const MyBookMarksScreen = () => {
  const {courseList} = useAppSelector(state => state.course);
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{backgroundColor: '#fff'}}
        ListHeaderComponent={
          <>
            <GoBack title="My Bookmark" iconName={Icons.More} />
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={Tags}
              style={{marginVertical: 12}}
              renderItem={({item}) => (
                <FilterCard
                  title={item}
                  isActive={item === 'All' ? true : false}
                />
              )}
              keyExtractor={(_, idx) => idx.toString()}
            />
          </>
        }
        data={courseList}
        renderItem={({item}) => (
          <View style={{alignItems: 'center'}}>
            <CourseCard {...item} />
          </View>
        )}
      />
    </>
  );
};

export default MyBookMarksScreen;
