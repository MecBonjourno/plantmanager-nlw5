import React from 'react';
import {View, Text} from 'react-native'
import { Welcome } from './src/pages/Welcome';
import { UserId } from './src/pages/UserId';
import { Confirmation } from './src/pages/Confirmation';
import { useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost'

import Routes from './src/routes'

// import AppLoading from '@expo-app-loading' //Linux é incompativel, arrumar no Windows

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular, 
    Jost_600SemiBold
  })

  if(!fontsLoaded)
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    )
  
  return (
    <Routes />
  );
}

