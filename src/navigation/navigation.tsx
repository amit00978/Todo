import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import dashboard from 'Todo/src/screens/dashboard/Dashbord';
import CreateTodo from 'Todo/src/screens/createTodo/CreateTodo';
import ArchiveList from 'Todo/src/screens/Archive/ArchiveList';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen name="Home" component={dashboard} />
        <Stack.Screen name="CreateTodo" component={CreateTodo} />
        <Stack.Screen name="archiveList" component={ArchiveList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
