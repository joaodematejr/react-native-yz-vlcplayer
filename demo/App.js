import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { VLCPlayer, VlCPlayerView } from 'react-native-yz-vlcplayer';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
    </SafeAreaView>
  );
}