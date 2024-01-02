import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Splash from './screens/Splash';
import IntroPage from './screens/IntroPage';
import Home from './screens/Home';
import { NewsProvider } from './context/fetchData';
import Favourites from './screens/Favourites';
import Profile from './screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Signup from './screens/Signup';
import Login from './screens/Login';
// import 
import { AuthContextProvider } from './context/authContext';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? 'home-outline'
            : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
        } else if (route.name === 'Favorite') {
          iconName = focused ? 'heart-outline' : 'heart-outline';
        }
        //
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarStyle: {
        position: 'absolute', bottom: '5%', left: '12%', right: '12%', height: 60, alignSelf: 'center', borderRadius: 32
      }, // Adjust position and height
      tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }, // Adjust label style
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false, }} />
      <Tab.Screen name="Favorite" component={Favourites} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};
export default function App() {
  return (

    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NewsProvider>

        <AuthContextProvider>
          <Stack.Navigator initialRouteName='Splash' >
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='intro' component={IntroPage} options={{ headerShown: false }} />
            <Stack.Screen name='home' component={HomeTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name='signup' component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
          </Stack.Navigator>
        </AuthContextProvider>

      </NewsProvider>
    </NavigationContainer>
  );
}
