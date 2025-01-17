import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import ChatScreen from './ChatScreen';
import CommunitiesScreen from './CommunitiesScreen';
import SettingsScreen from './SettingsScreen';
import NotificationsScreen from './NotificationsScreen';
import { Colors } from '../constants/Colors';
import ChatsPage from './pages/ChatsPage';
import EventsPage from './pages/EventsPage';
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';

const TabContent = ({ activeTab }) => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity is 0

  // Trigger fade-in animation whenever activeTab changes
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Fade-in to 1 (fully visible)
      duration: 500, // Duration of the fade-in effect
      useNativeDriver: true, // Enable native driver for better performance
    }).start();
  }, [activeTab]); // Dependency array, triggers on activeTab change

  // Select the content based on the activeTab value
  let content;
  switch (activeTab) {
    case 'chat':
      content = <ChatsPage />;
      break;
    case 'events':
      content = <EventsPage />;
      break;
    case 'courses':
      content = <CoursesPage />;
      break;
    case 'settings':
      content = <SettingsPage />;
      break;
    default:
      content = <HomePage />;
      break;
  }

  return (
    <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
      {content}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.black
  },
  defaultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TabContent;
