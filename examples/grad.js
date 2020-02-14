import React from 'react';
import { View, Text } from 'react-native';
// import { LinearGradient } from "expo";
import { LinearGradient } from 'expo-linear-gradient';

let example1 = (
  <LinearGradient
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}
    colors={['#9b42f5', '#6e34bf']}
  >
    <Text>MORFOS no expo 8</Text>
    <Text>exp://4ikyv.sse.codesandbox.io/</Text>
  </LinearGradient>
);

let example2 = (
  <View style={{ flex: 1 }}>
    <View style={{ backgroundColor: 'orange', flex: 1 }} />
    <LinearGradient
      colors={['rgba(0,0,0,0.8)', 'transparent']}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300
      }}
    />
  </View>
);

let example3 = (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}
    >
      <Text
        style={{
          backgroundColor: 'transparent',
          fontSize: 15,
          color: '#fff'
        }}
      >
        Sign in with Facebook
      </Text>
    </LinearGradient>
  </View>
);

export default () => (
  <View
    style={{
      flex: 1,
      height: '100vh'
    }}
  >
    {example3}
  </View>
);
