import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import AuthNavigator from './app/navigation/AuthNavigator';

const App = () => (
 <NavigationContainer>
   <AuthNavigator/>
 </NavigationContainer>
);


export default App;