import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import './global.css';
import {Header} from './src/components/Header';
import {Routes} from './src/naivgation/Routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaView className="flex flex-1 bg-primary/10">
      <Header />
      <Routes />
    </SafeAreaView>
  );
}

export default App;
