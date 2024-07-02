import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

const activeTime = 1000;
const inactiveTime = 500;
const middlePadding = 49; // Padding between rectangles in the middle

const Training = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [trainingStarted, setTrainingStarted] = useState(false);
  const [showStartMessage, setShowStartMessage] = useState(true);

  useEffect(() => {
    let interval;

    if (trainingStarted) {
      interval = setInterval(() => {
        const randomSection = Math.floor(Math.random() * 4);
        setActiveSection(randomSection);

        setTimeout(() => {
          setActiveSection(null);
        }, activeTime);
      }, activeTime + inactiveTime);
    }

    return () => clearInterval(interval);
  }, [trainingStarted]);

  const handleStartPress = () => {
    if (!trainingStarted) {
      setTrainingStarted(true);
      setShowStartMessage(false);
    } else {
      setTrainingStarted(false);
      setShowStartMessage(true);
    }
  };

  const renderSections = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const positions = [
      { top: 0, left: screenWidth / 2 - 25, width: 50, height: screenHeight / 2 - middlePadding / 2 }, // Top center to middle
      { top: screenHeight / 2 + middlePadding / 2, left: screenWidth / 2 - 25, width: 50, height: screenHeight / 2 - middlePadding / 2 }, // Middle to bottom center
      { top: screenHeight / 2 - 25, left: 0, width: screenWidth / 2 - middlePadding / 2, height: 50 }, // Left center to middle
      { top: screenHeight / 2 - 25, left: screenWidth / 2 + middlePadding / 2, width: screenWidth / 2 - middlePadding / 2, height: 50 }, // Right center to middle
    ];

    return positions.map((style, index) => (
      <View
        key={index}
        style={[
          styles.section,
          activeSection === index ? styles.activeSection : null,
          style,
        ]}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.crossContainer}>
        {renderSections()}
        <TouchableOpacity
          style={[
            styles.dimScreen,
            (showStartMessage || !trainingStarted) ? { backgroundColor: 'rgba(0,0,0,0.5)' } : null,
          ]}
          activeOpacity={1}
          onPress={handleStartPress}
        >
          <Text style={styles.startText}>
            {!trainingStarted ? 'Tap to start training\n(tap again to pause)' : ''}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 30,
    paddingBottom: 0,
  },
  crossContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  dimScreen: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  section: {
    position: 'absolute',
    backgroundColor: '#c0c0c0',
    borderWidth: 1,
    borderColor: '#808080',
  },
  activeSection: {
    backgroundColor: '#ffcc00',
  },
});

export default Training;
