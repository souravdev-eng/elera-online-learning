import {StyleSheet} from 'react-native';
import {width, height, fonts_Family, fonts_Size, colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: width,
    aspectRatio: 16 / 9,
    alignSelf: 'center',
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
  },
  palyIcon: {
    width: 45,
    height: 45,
    tintColor: '#fff',
  },
  playIconContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
    height: 54,
    alignContent: 'center',
    top: '30%',
    opacity: 0.8,
  },
  // title style
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h2,
    color: colors.light.darkGrey,
  },
  bookMarks: {
    width: 30,
    height: 30,
    tintColor: colors.light.primary,
  },
  category: {
    backgroundColor: colors.light.blueLight,
    padding: 6,
    borderRadius: 6,
    alignItems: 'center',
    marginRight: 10,
  },
  categoryText: {
    fontFamily: fonts_Family.UrbanistMedium,
    fontSize: fonts_Size.medium - 2,
    color: colors.light.primary,
  },
  ratingText: {
    fontFamily: fonts_Family.UrbanistMedium,
    fontSize: fonts_Size.medium,
    color: colors.light.darkGrey,
    letterSpacing: 0.6,
  },
  star: {
    width: 14,
    height: 14,
    tintColor: colors.light.orange,
    marginRight: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseDetailsWrapper: {
    marginVertical: 12,
    justifyContent: 'space-between',
    borderBottomWidth: 0.4,
    paddingBottom: 15,
    borderBottomColor: colors.light.grey1,
  },
  price: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.h2 + 4,
    color: colors.light.primary,
    marginRight: 8,
  },
  originalPrice: {
    fontFamily: fonts_Family.UrbanistBold,
    fontSize: fonts_Size.body,
    color: colors.light.grey1,
    textDecorationLine: 'line-through',
  },
  certificate: {
    width: 20,
    height: 20,
    tintColor: colors.light.PrimaryLight,
    marginRight: 4,
  },
});

export default styles;
