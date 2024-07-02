import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableWithoutFeedback } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const triangleWidthConst = 10;
const triangleOffset = 30;

const rotationAngle = Math.atan(screenWidth / screenHeight); // Radians
const bottomWidthConst = Math.sqrt((Math.pow(screenHeight / 2, 2) + Math.pow(screenWidth / 2, 2))) * 1;

//=================SETTINGS=========================

//color
const backgroundColor = '#f0f0f0';
const coloredTriangleColor = 'green';

//time
const turnOnTime = 1000;
const turnOffTime = 500;

//==================================================

const defaultTriangleColors = {
  blueTriangle: '#b5b5b5',
  redTriangle: '#b5b5b5',
  greenTriangle: '#b5b5b5',
  yellowTriangle: '#b5b5b5',
  purpleTriangle: '#b5b5b5',
  orangeTriangle: '#b5b5b5',
  pinkTriangle: '#b5b5b5',
  cyanTriangle: '#b5b5b5',
  middleTriangle: '#b5b5b5',
};

const TriangleScreen = () => {
  const [triangleColors, setTriangleColors] = useState(defaultTriangleColors);
  const [isDimmed, setIsDimmed] = useState(true);
  const [isColoringActive, setIsColoringActive] = useState(false);
  const [overlayColor, setOverlayColor] = useState('rgba(0, 0, 0, 0.5)');
  const [message, setMessage] = useState('tap to train');
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  useEffect(() => {
    if (isColoringActive) {
      const triangleNames = Object.keys(defaultTriangleColors);
      const changeColor = () => {
        const randomTriangle = triangleNames[Math.floor(Math.random() * triangleNames.length)];
        const originalColor = defaultTriangleColors[randomTriangle];

        setTriangleColors((prevColors) => ({
          ...prevColors,
          [randomTriangle]: coloredTriangleColor
        }));

        setTimeout(() => {
          setTriangleColors((prevColors) => ({
            ...prevColors,
            [randomTriangle]: originalColor
          }));
        }, turnOnTime);
      };

      const interval = setInterval(changeColor, turnOffTime + turnOnTime);
      return () => clearInterval(interval);
    }
  }, [isColoringActive]);

  const toggleOverlay = () => {
    if (!isCountdownActive) {
      if (isDimmed) {
        setIsCountdownActive(true);
        setMessage('3');
        let countdown = 3;
        const countdownInterval = setInterval(() => {
          countdown -= 1;
          if (countdown > 0) {
            setMessage(countdown.toString());
          } else {
            clearInterval(countdownInterval);
            setIsDimmed(false);
            setIsColoringActive(true);
            setIsCountdownActive(false);
          }
        }, 1000);
      } else {
        setIsDimmed(true);
        setIsColoringActive(false);
        setMessage('tap to train');
      }
    }
  };

  const handlePressIn = () => {
    if (!isCountdownActive) {
      setOverlayColor('rgba(0, 0, 0, 0.7)');
    }
  };

  const handlePressOut = () => {
    if (!isCountdownActive) {
      setOverlayColor('rgba(0, 0, 0, 0.5)');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={toggleOverlay} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <View style={styles.container}>
        <View style={[styles.triangle, styles.blueTriangle, { borderBottomColor: triangleColors.blueTriangle }]} />
        <View style={[styles.triangle, styles.redTriangle, { borderBottomColor: triangleColors.redTriangle }]} />
        <View style={[styles.triangle, styles.greenTriangle, { borderBottomColor: triangleColors.greenTriangle }]} />
        <View style={[styles.triangle, styles.yellowTriangle, { borderBottomColor: triangleColors.yellowTriangle }]} />
        <View style={[styles.triangle, styles.purpleTriangle, { borderBottomColor: triangleColors.purpleTriangle }]} />
        <View style={[styles.triangle, styles.orangeTriangle, { borderBottomColor: triangleColors.orangeTriangle }]} />
        <View style={[styles.triangle, styles.pinkTriangle, { borderBottomColor: triangleColors.pinkTriangle }]} />
        <View style={[styles.triangle, styles.cyanTriangle, { borderBottomColor: triangleColors.cyanTriangle }]} />
        <View style={[styles.middleTriangle, { backgroundColor: triangleColors.middleTriangle }]} />
        <View style={styles.grayRectangle} />
        {isDimmed && (
          <View style={[styles.overlay, { backgroundColor: overlayColor }]}>
            <Text style={isCountdownActive ? styles.countdownText : styles.overlayText}>{message}</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
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
  middleTriangle: {
    position: 'absolute',
    width: screenWidth / 6,
    height: screenWidth / 6,
    borderRadius: screenWidth / 1,
    //backgroundColor: 'blue', // Change color as needed
    top: screenHeight / 2 + triangleOffset - screenWidth / 12,
    left: screenWidth / 2 - screenWidth / 12,
  },
  grayRectangle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screenWidth,
    height: triangleOffset,
    backgroundColor: backgroundColor,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  countdownText: {
    color: '#fff',
    fontSize: 200,
    fontWeight: 'bold',
  },
  
});

export default TriangleScreen;