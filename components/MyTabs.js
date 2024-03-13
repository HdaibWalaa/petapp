import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import homepage from "../screens/Home";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}
