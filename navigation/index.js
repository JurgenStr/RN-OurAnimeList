import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {AuthContext} from './context';

import AboutScreen from 'D:/Sources/Git/OurAnimeListReact/screen/AboutScreen';
import MainPage from 'D:/Sources/Git/OurAnimeListReact/screen/MainPage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconComm from 'react-native-vector-icons/MaterialCommunityIcons';
import {SettingsScreen} from 'D:/Sources/Git/OurAnimeListReact/screen/SettingsScreen';
import LoadingScreen from 'D:/Sources/Git/OurAnimeListReact/screen/LoadingScreen';
import {LoginFunction} from 'D:/Sources/Git/OurAnimeListReact/screen/LoginScreenFunc';
import {RegisterFunction} from 'D:/Sources/Git/OurAnimeListReact/screen/RegisterScreenFunc';
import DetailsScreen from '../screen/DetailsScreen';
import Header from '../screen/class/Header';
import HeaderDetails from '../screen/class/HeaderDetails';

const LoginStack = createStackNavigator();
const AboutStack = createStackNavigator();
const MainStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const DetailsStack = createStackNavigator();

function CustomDrawerContent(props) {
  const {signOut} = React.useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.sidebarContainer}>
        <Image
          source={require('D:/Sources/Git/OurAnimeListReact/assets/logo.png')}
          style={styles.loadingImage}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => signOut()}
        style={styles.logoutDrawer}
      />
    </DrawerContentScrollView>
  );
}

const MainScreen = () => (
  <DetailsStack.Navigator initialRouteName="Main" backBehavior="initialRoute">
    <DetailsStack.Screen
      name="MainPage"
      component={MainPage}
      options={{
        headerTitle: () => <Header name="Current Season List" />,
      }}
    />
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerTitle: () => <HeaderDetails />,
      }}
    />
  </DetailsStack.Navigator>
);

const TabsScreen = () => (
  <BottomTab.Navigator
    initialRouteName="MainPage"
    backBehavior="initialRoute"
    tabBarOptions={{labelStyle: styles.bottomTabLabel}}>
    <BottomTab.Screen
      name="MainPage"
      component={MainScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => <Icon name="home" size={25} />,
      }}
    />
    <BottomTab.Screen
      name="Profile"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: () => <Icon name="face" size={25} />,
      }}
    />
  </BottomTab.Navigator>
);

const AboutScreenStack = () => (
  <AboutStack.Navigator initialRouteName="Contributor">
    <AboutStack.Screen
      name="Contributor"
      component={AboutScreen}
      options={{
        headerTitle: () => <Header name="Contributor" />,
      }}
    />
  </AboutStack.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName="Anime List"
    backBehavior="initialRoute"
    drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name="Anime List" component={TabsScreen} />
    <Drawer.Screen name="Contributor" component={AboutScreenStack} />
  </Drawer.Navigator>
);

function OurAnimeList() {
  const [loading, setLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setLoading(false);
        setUserToken('guest');
      },
      signUp: () => {
        setLoading(false);
        setUserToken('guest');
      },
      signOut: () => {
        setLoading(false);
        setUserToken(null);
      },
    };
  });

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <MainStack.Navigator initialRouteName="Drawer">
            <MainStack.Screen
              name="Drawer"
              component={DrawerScreen}
              options={{
                headerShown: false,
              }}
            />
          </MainStack.Navigator>
        ) : (
          <LoginStack.Navigator initialRouteName="Login">
            <LoginStack.Screen
              name="Login"
              component={LoginFunction}
              options={{
                headerShown: false,
              }}
            />
            <LoginStack.Screen
              name="Register"
              component={RegisterFunction}
              options={{headerShown: false}}
            />
          </LoginStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  bottomTabLabel: {
    paddingBottom: 5,
    fontFamily: 'Ubuntu-Bold',
  },
  loadingImage: {
    height: 28,
    width: 275,
  },
  sidebarContainer: {
    paddingVertical: 20,
  },
});

export default OurAnimeList;
// import { AuthContext } from "./context";
