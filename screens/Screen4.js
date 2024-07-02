import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

const activeTime = 1000;
const inactiveTime = 500;

const paddingConst = 54;

const Training = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [trainingStarted, setTrainingStarted] = useState(false);
  const [showStartMessage, setShowStartMessage] = useState(true);

  useEffect(() => {
    let interval;

    if (trainingStarted) {
      interval = setInterval(() => {
        const randomSection = Math.floor(Math.random() * 8);
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
  
    const sectionWidth = screenWidth / 5; // Adjust the division factor for thinner rectangles
    const sectionHeight = screenHeight / 2.223; // Adjust the division factor for thinner rectangles

    // Calculate the rotation angle in radians
    const rotationAngle = Math.atan(screenWidth / screenHeight);
  

    


    const positions = [

      // Top center to middle
      { 
        top: 0,
        left: screenWidth / 2 - sectionWidth / 2,
        width: sectionHeight,
      }, 


      // Middle to right center
      { 
        top: screenHeight / 2 - sectionHeight / 2,
        left: screenWidth - sectionWidth + paddingConst,
        transform: [{ rotate: '90deg' }],
      },


      // Middle to bottom center
      { 
        top: screenHeight - sectionHeight,
        left: screenWidth / 2 - sectionWidth / 2
      }, 


      // Middle to left center
      { 
        top: screenHeight / 2 - sectionHeight / 2,
        left: -paddingConst,
        transform: [{ rotate: '90deg' }]
      }, 

      
      // Top left to middle
      { 
        top: 0,
        left: 0,
        transform: [{ rotate: `-${rotationAngle}rad` }] 
      }, 


      // Top right to middle
      { 
        top: 0,
        left: screenWidth - sectionWidth,
        transform: [{ rotate: `${rotationAngle}rad` }] 
      }, 

      
      // Bottom left to middle
      { 
        top: screenHeight - sectionHeight,
        left: 0,
        transform: [{ rotate: `${rotationAngle}rad` }] 
      }, 


      // Bottom right to middle
      { 
        top: screenHeight - sectionHeight,
        left: screenWidth - sectionWidth,
        transform: [{ rotate: `-${rotationAngle}rad` }] 
      }, 
    ];
  


    return positions.map((style, index) => (
      <View
        key={index}
        style={[
          styles.section,
          activeSection === index ? styles.activeSection : null,
          style,
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
      <View style={styles.starContainer}>
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
  starContainer: {
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
