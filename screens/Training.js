import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const triangleWidthConst = 10;
const triangleOffset = 30;

const rotationAngle = Math.atan(screenWidth / screenHeight); // Radians
const bottomWidthConst = Math.sqrt((Math.pow(screenHeight / 2, 2) + Math.pow(screenWidth / 2, 2))) * 1;

const defaultTriangleColors = {
  blueTriangle: '#b5b5b5',
  redTriangle: '#b5b5b5',
  greenTriangle: '#b5b5b5',
  yellowTriangle: '#b5b5b5',
  purpleTriangle: '#b5b5b5',
  orangeTriangle: '#b5b5b5',
  pinkTriangle: '#b5b5b5',
  cyanTriangle: '#b5b5b5'
};

const backgroundColor = '#f0f0f0';

const TriangleScreen = () => {
  const [triangleColors, setTriangleColors] = useState(defaultTriangleColors);

  useEffect(() => {
    const triangleNames = Object.keys(defaultTriangleColors);
    let interval;

    const changeColor = () => {
      const randomTriangle = triangleNames[Math.floor(Math.random() * triangleNames.length)];
      const originalColor = defaultTriangleColors[randomTriangle];

      setTriangleColors((prevColors) => ({
        ...prevColors,
        [randomTriangle]: 'yellow'
      }));

      setTimeout(() => {
        setTriangleColors((prevColors) => ({
          ...prevColors,
          [randomTriangle]: originalColor
        }));
      }, 1000);
    };

    interval = setInterval(changeColor, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      
      <View style={[styles.triangle, styles.blueTriangle, { borderBottomColor: triangleColors.blueTriangle }]} />
      <View style={[styles.triangle, styles.redTriangle, { borderBottomColor: triangleColors.redTriangle }]} />
      <View style={[styles.triangle, styles.greenTriangle, { borderBottomColor: triangleColors.greenTriangle }]} />
      <View style={[styles.triangle, styles.yellowTriangle, { borderBottomColor: triangleColors.yellowTriangle }]} />
      <View style={[styles.triangle, styles.purpleTriangle, { borderBottomColor: triangleColors.purpleTriangle }]} />
      <View style={[styles.triangle, styles.orangeTriangle, { borderBottomColor: triangleColors.orangeTriangle }]} />
      <View style={[styles.triangle, styles.pinkTriangle, { borderBottomColor: triangleColors.pinkTriangle }]} />
      <View style={[styles.triangle, styles.cyanTriangle, { borderBottomColor: triangleColors.cyanTriangle }]} />
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
  triangle: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: screenWidth / triangleWidthConst,
    borderRightWidth: screenWidth / triangleWidthConst,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  blueTriangle: {
    top: screenHeight / 2 + triangleOffset,
    left: (screenWidth / 2) - (screenWidth / triangleWidthConst),
    borderBottomWidth: screenHeight / 2,
    transform: [{ rotate: '0deg' }],
  },
  redTriangle: {
    top: triangleOffset,
    left: (screenWidth / 2) - (screenWidth / triangleWidthConst),
    borderBottomWidth: screenHeight / 2,
    transform: [{ rotate: '180deg' }],
  },
  greenTriangle: {
    top: screenHeight / 2 + triangleOffset - screenWidth / 4,
    left: (screenWidth / 4 - screenWidth / triangleWidthConst) + screenWidth / 2,
    borderBottomWidth: screenWidth / 2,
    transform: [{ rotate: '-90deg' }],
  },
  yellowTriangle: {
    top: screenHeight / 2 + triangleOffset - screenWidth / 4,
    left: screenWidth / 4 - screenWidth / triangleWidthConst,
    borderBottomWidth: screenWidth / 2,
    transform: [{ rotate: '90deg' }],
  },
  purpleTriangle: {
    top: screenHeight / 2 - bottomWidthConst / 2 + triangleOffset,
    left: screenWidth / 2 - screenWidth / triangleWidthConst,
    borderBottomWidth: bottomWidthConst,
    transform: [
      { rotate: `${rotationAngle}rad` },
      { translateX: 0 },
      { translateY: bottomWidthConst / 2 },
    ],
  },
  orangeTriangle: {
    top: screenHeight / 2 - bottomWidthConst / 2 + triangleOffset,
    left: screenWidth / 2 - screenWidth / triangleWidthConst,
    borderBottomWidth: bottomWidthConst,
    transform: [
      { rotate: `-${rotationAngle}rad` },
      { translateX: 0 },
      { translateY: bottomWidthConst / 2 },
    ],
  },
  pinkTriangle: {
    top: screenHeight / 2 - bottomWidthConst / 2 + triangleOffset,
    left: screenWidth / 2 - screenWidth / triangleWidthConst,
    borderBottomWidth: bottomWidthConst,
    transform: [
      { rotate: `-${rotationAngle}rad` },
      { rotate: '180deg' },
      { translateX: 0 },
      { translateY: bottomWidthConst / 2 },
    ],
  },
  cyanTriangle: {
    top: screenHeight / 2 - bottomWidthConst / 2 + triangleOffset,
    left: screenWidth / 2 - screenWidth / triangleWidthConst,
    borderBottomWidth: bottomWidthConst,
    transform: [
      { rotate: `${rotationAngle}rad` },
      { rotate: '180deg' },
      { translateX: 0 },
      { translateY: bottomWidthConst / 2 },
    ],
  },
  grayRectangle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screenWidth,
    height: triangleOffset,
    backgroundColor: backgroundColor,
  },
});

export default TriangleScreen;
