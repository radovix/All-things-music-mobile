import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { pure } from 'recompose';

/**
 * Grades range slider component.
 * 
 * @param {Array<number>} gradesRange Grades range
 * @param {function} onGradesRangeChange Function handling the change of grades range
 * @returns component's elements 
 */
const GradesRangeSlider = ({ gradesRange, onGradesRangeChange }) => (
  <View>
    <View style={styles.gradesLabel}>
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
      <Text>4</Text>
      <Text>5</Text>
    </View>         
    <MultiSlider 
      values={Array.from(gradesRange)}
      min={1}
      max={5}
      step={0.1}
      enabledTwo={true}
      isMarkersSeparated={true}
      containerStyle={styles.sliderContainer}
      markerStyle={styles.markerStyle}
      selectedStyle={styles.selectedStyle}
      onValuesChangeFinish={onGradesRangeChange}
    />
  </View>
);

/**
 * Component's styles object.
 */
const styles = StyleSheet.create({
  gradesLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 292,
    paddingTop: 5,
    paddingLeft: 6
  },
  sliderContainer: {
    paddingLeft: 10
  },
  markerStyle: { 
    backgroundColor: '#B7521E' 
  },
  selectedStyle: {
    backgroundColor: '#B7521E'
  }
});

export default pure(GradesRangeSlider);

