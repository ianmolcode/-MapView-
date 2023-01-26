import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import ChatScreen from './screenfortabs/ChatScreen';
import FindScreen from './screenfortabs/FindScreen';
import HomeScreen from './screenfortabs/HomeScreen';
import MapScreen from './screenfortabs/MapScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs=()=>{
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // tabBarShowLabel: false,
                // style:{
                 
                //     position: 'absolute',
                //     bottom: 25,
                //     left: 20,
                //     right: 20,
                //     elevation: 0,
                //     backgroundColor: '#ffffff',
                //     borderRadius: 15,
                //     height: 90,
                    

                // },
                tabBarStyle: {
                    height: 50,
                    width: 400,
                    
                    flexDirection: 'column',
                    alignSelf: 'center',
                    elevation: 2,
                    borderTopStartRadius: 5,
                    borderTopEndRadius: 5,
                    borderTopColor: '#b6b6b6',
                    flexDirection: 'row',
                    
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Map') {
                        iconName = focused ? 'ios-map' : 'ios-map';
                    } else if (route.name === 'Home') {
                        
                        
                        iconName = focused ? 'ios-home' : 'ios-home';
                    } else if (route.name === 'Find') {
                        


                        iconName = focused ? 'ios-search' : 'ios-search';
                    } else if (route.name === 'Chat') {
                        iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Map" options={{ headerShown: false }} component={MapScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Find" component={FindScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
        </Tab.Navigator>
    )
}

export default Tabs;