import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import ChatScreen from './screenfortabs/ChatScreen';
import FindScreen from './screenfortabs/FindScreen';
import HomeScreen from './screenfortabs/HomeScreen';
import MapScreen from './screenfortabs/MapScreen';

const Tabs=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Find" component={FindScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
        </Tab.Navigator>
    )
}

export default Tabs;