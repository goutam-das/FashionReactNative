import React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

interface SlideProps {
  label: string;
  right?: boolean;
}

const Slide: React.FC<SlideProps> = ({label, right}) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'SF-Pro-Text-Bold',
    color: 'white',
    textAlign: 'center',
  },
});
