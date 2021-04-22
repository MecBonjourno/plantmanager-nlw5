import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Welcome } from '../pages/Welcome';
import { UserId } from '../pages/UserId';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelector } from '../pages/PlantSelector';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator headerMode="none" screenOptions={{
        cardStyle: {
            backgroundColor: colors.white,
        }
      }}
    >
        <stackRoutes.Screen name="Welcome" component={Welcome}/>
        <stackRoutes.Screen name="UserIdentification" component={UserId}/>
        <stackRoutes.Screen name="Confirmation" component={Confirmation}/>
        <stackRoutes.Screen name="PlantSelector" component={PlantSelector}/>

    </stackRoutes.Navigator>
)

export default AppRoutes;