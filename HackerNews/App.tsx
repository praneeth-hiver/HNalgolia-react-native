import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import InitScreen from "./src/screens/InitScreen";
import Browser from "./src/screens/Browser";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Init: {
      screen: InitScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Browser: {
      screen: Browser,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    initialRouteName: "Init"
  }
);

const App = createAppContainer(MainNavigator);

export default App;
