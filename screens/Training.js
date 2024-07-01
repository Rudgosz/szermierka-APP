import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

const crossMargin = 6;

const Training = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [trainingStarted, setTrainingStarted] = useState(false);
  const [showStartMessage, setShowStartMessage] = useState(true);

  useEffect(() => {
    let interval;

    if (trainingStarted) {
      interval = setInterval(() => {
        // Generate a random number between 0 and 3 (for 4 sections)
        const randomSection = Math.floor(Math.random() * 4);
        setActiveSection(randomSection);

        // Clear active section after 2 seconds
        setTimeout(() => {
          setActiveSection(null);
        }, 2000);
      }, 3000); // Change every 3 seconds (2 seconds active + 1 second inactive)
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

    const sectionWidth = screenWidth / 2 - crossMargin; // Each section takes half of the screen width
    const sectionHeight = (screenHeight - 80) / 2; // Calculate height with space at top and bottom

    return [0, 1, 2, 3].map((index) => (
      <View
        key={index}
        style={[
          styles.section,
          index === 1 || index === 2 ? styles.crossSection : null,
          activeSection === index ? styles.activeSection : null,
          {
            width: sectionWidth,
            height: sectionHeight,
          },
        ]}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.crossContainer}>
        <View style={styles.row}>
          <View style={styles.column}>
            {renderSections().slice(0, 2)}
          </View>
          <View style={styles.column}>
            {renderSections().slice(2, 4)}
          </View>
        </View>
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
    paddingTop: 30, // Adjust as needed for space at the top
    paddingBottom: 0, // Adjust as needed for space at the bottom
  },
  crossContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Ensure content inside crossContainer is positioned correctly
  },
  dimScreen: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text color
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    backgroundColor: '#c0c0c0',
    borderWidth: 1,
    borderColor: '#808080',
    margin: crossMargin - 2,
  },
  crossSection: {
    backgroundColor: '#916f4b', // Brownish background color for cross sections
  },
  activeSection: {
    backgroundColor: '#ffcc00', // Yellow color for active section
  },
});

export default Training;
