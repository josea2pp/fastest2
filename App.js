
import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainNavigator from './src/Navigator/Stack/stack';
import { Provider } from 'react-redux';
import configureStore from './src/Store/store';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

});

