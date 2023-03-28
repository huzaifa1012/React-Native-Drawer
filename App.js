// In App.js in a new project
import 'react-native-gesture-handler';

import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function B() {
  return (
    <Text>B</Text>
  )
}
function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Screen2" component={Screen2} />
      <Drawer.Screen name="B" component={B} />
    </Drawer.Navigator>
  );
}


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title='Screen Mov'
        onPress={() => { navigation.openDrawer(); }}
      />
    </View>
  );
}


function Screen2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 2</Text>
    </View>
  );
}


// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Screen2" component={Screen2} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MyDrawer">
        <Drawer.Screen name="MyDrawer" component={MyDrawer} />
        {/* <Stack.Screen name="Screen2" component={Screen2} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;