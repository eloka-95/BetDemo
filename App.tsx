import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Box } from './src/design-system';
import Features from './src/screens/Features/Features';

function App() {
  return (
    <SafeAreaProvider >
      <StatusBar
        barStyle="light-content" 
        backgroundColor="#1a1a1a" 
      />
      <Box style={styles.container}>
        <Features />
      </Box>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#1a1a1a"
  },
});

export default App;