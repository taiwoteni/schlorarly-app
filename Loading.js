import { StyleSheet, View, ActivityIndicator } from 'react-native';
import React from 'react';
import theme from '../constants/theme';

const Loading = ({ size = "large", color = theme.colors.button }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
