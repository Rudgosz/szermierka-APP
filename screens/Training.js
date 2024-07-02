import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const triangleWidthConst = 10;
const triangleOffset = 30;

const TriangleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueTriangle} />
      <View style={styles.redTriangle} />
      <View style={styles.greenTriangle} />
      <View style={styles.yellowTriangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
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
    borderBottomColor: 'blue',
    transform: [{ rotate: '0deg' }],
    marginBottom: 0,
  },
  redTriangle: {
    position: 'absolute',
    top: triangleOffset,
    right: (screenWidth / 2) - (screenWidth / triangleWidthConst),
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: screenWidth / triangleWidthConst,
    borderRightWidth: screenWidth / triangleWidthConst,
    borderBottomWidth: screenHeight / 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
    transform: [{ rotate: '180deg' }],
    marginBottom: screenHeight,
  },
  greenTriangle: {
    position: 'absolute',
    top: screenHeight / 2  + triangleOffset - screenWidth / 4,
    right: screenWidth / 4 - screenWidth / triangleWidthConst,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: screenWidth / triangleWidthConst,
    borderRightWidth: screenWidth / triangleWidthConst,
    borderBottomWidth: screenWidth / 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'green',
    transform: [{ rotate: '-90deg' }],
    marginBottom: 0,
  },
  yellowTriangle: {
    position: 'absolute',
    top: screenHeight / 2  + triangleOffset - screenWidth / 4,
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
    borderBottomColor: 'yellow',
    transform: [{ rotate: '90deg' }],
    marginBottom: 0,
  },
});

export default TriangleScreen;
