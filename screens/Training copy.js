import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const triangleWidthConst = 10;
const triangleOffset = 30;

const rotationAngle = Math.atan(screenWidth / screenHeight); // Radians
const bottomWidthConst = Math.sqrt((Math.pow(screenHeight/2, 2) + Math.pow(screenWidth/2, 2))) * 1;


const blueTriangleColor = '#b5b5b5'
const redTriangleColor = '#b5b5b5'
const greenTriangleColor = '#b5b5b5'
const yellowTriangleColor = '#b5b5b5'
const purpleTriangleColor = '#b5b5b5'
const orangeTriangleColor = '#b5b5b5'
const pinkTriangleColor = '#b5b5b5'
const cyanTriangleColor = '#b5b5b5'
const backgroundColor = '#f0f0f0'

const TriangleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueTriangle} />
      <View style={styles.redTriangle} />
      <View style={styles.greenTriangle} />
      <View style={styles.yellowTriangle} />
      <View style={styles.purpleTriangle} />
      <View style={styles.orangeTriangle} />
      <View style={styles.pinkTriangle} />
      <View style={styles.cyanTriangle} />
      <View style={styles.grayRectangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  blueTriangle: {
    position: 'absolute',
    top: screenHeight / 2 + triangleOffset,
    left: (screenWidth / 2) - (screenWidth / triangleWidthConst),
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: screenWidth / triangleWidthConst,
    borderRightWidth: screenWidth / triangleWidthConst,
    borderBottomWidth: screenHeight / 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: blueTriangleColor,
    transform: [{ rotate: '0deg' }],
    marginBottom: 0,
  },
  redTriangle: {
    position: 'absolute',
    top: triangleOffset,
    left: (screenWidth / 2) - (screenWidth / triangleWidthConst),
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: screenWidth / triangleWidthConst,
    borderRightWidth: screenWidth / triangleWidthConst,
    borderBottomWidth: screenHeight / 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: redTriangleColor,
    transform: [{ rotate: '180deg' }],
    marginBottom: screenHeight,
  },
  greenTriangle: {
    position: 'absolute',
    top: screenHeight / 2 + triangleOffset - screenWidth / 4,
    left: (screenWidth / 4 - screenWidth / triangleWidthConst) + screenWidth/2,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: screenWidth / triangleWidthConst,
    borderRightWidth: screenWidth / triangleWidthConst,
    borderBottomWidth: screenWidth / 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: greenTriangleColor,
    transform: [{ rotate: '-90deg' }],
    marginBottom: 0,
  },
  yellowTriangle: {
    position: 'absolute',
    top: screenHeight / 2 + triangleOffset - screenWidth / 4,
    left: screenWidth / 4 - screenWidth / triangleWidthConst,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: screenWidth / triangleWidthConst,
    borderRightWidth: screenWidth / triangleWidthConst,
    borderBottomWidth: screenWidth / 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: yellowTriangleColor,
    transform: [{ rotate: '90deg' }],
    marginBottom: 0,
  },
  
  purpleTriangle: {
    position: 'absolute',
    top: screenHeight/2 - bottomWidthConst/2 + triangleOffset,
    left: screenWidth/2 - screenWidth / triangleWidthConst,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: screenWidth / triangleWidthConst,
    borderRightWidth: screenWidth / triangleWidthConst,
    borderBottomWidth: bottomWidthConst,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: purpleTriangleColor,
    transform: [
      {rotate: `${rotationAngle}rad` },
      {translateX: 0},
      {translateY: bottomWidthConst/2},
      
    ],
    marginBottom: 0,
  },
  orangeTriangle: {
    position: 'absolute',
    top: screenHeight/2 - bottomWidthConst/2 + triangleOffset,
    left: screenWidth/2 - screenWidth / triangleWidthConst,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: screenWidth / triangleWidthConst,
    borderRightWidth: screenWidth / triangleWidthConst,
    borderBottomWidth: bottomWidthConst,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: orangeTriangleColor,
    transform: [
      {rotate: `-${rotationAngle}rad` },
      {translateX: 0},
      {translateY: bottomWidthConst/2},
      
    ],
    marginBottom: 0,
  },
  pinkTriangle: {
    position: 'absolute',
    top: screenHeight/2 - bottomWidthConst/2 + triangleOffset,
    left: screenWidth/2 - screenWidth / triangleWidthConst,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: screenWidth / triangleWidthConst,
    borderRightWidth: screenWidth / triangleWidthConst,
    borderBottomWidth: bottomWidthConst,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: pinkTriangleColor,
    transform: [
      {rotate: `-${rotationAngle}rad` },
      {rotate: '180deg' },
      {translateX: 0},
      {translateY: bottomWidthConst/2},
      
    ],
    marginBottom: 0,
  },

  cyanTriangle: {
    position: 'absolute',
    top: screenHeight/2 - bottomWidthConst/2 + triangleOffset,
    left: screenWidth/2 - screenWidth / triangleWidthConst,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: screenWidth / triangleWidthConst,
    borderRightWidth: screenWidth / triangleWidthConst,
    borderBottomWidth: bottomWidthConst,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: cyanTriangleColor,
    transform: [
      {rotate: `${rotationAngle}rad` },
      {rotate: '180deg' },
      {translateX: 0},
      {translateY: bottomWidthConst/2},
      
    ],
    marginBottom: 0,
  },

  grayRectangle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    backgroundColor: backgroundColor,
    borderStyle: 'solid',
    borderLeftWidth: screenWidth,
    borderRightWidth: screenWidth,
    borderBottomWidth: triangleOffset,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: backgroundColor,
    //transform: [{ rotate: '90deg' }],
    marginBottom: 0,
  },
  
});

export default TriangleScreen;
