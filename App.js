import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import SingleResultScreen from "./src/screens/SingleResultScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Single: SingleResultScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
