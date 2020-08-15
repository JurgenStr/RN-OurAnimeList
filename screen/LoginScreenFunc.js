import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
  TouchableNativeFeedback,
} from 'react-native';
import {AuthContext} from 'D:/Sources/Git/OurAnimeListReact/navigation/context';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const LoginFunction = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);
  const [username, setUsername] = React.useState({username: ''});
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Icon style={styles.titleIcon} name="gradient" size={26} />
        <Text style={styles.titleName}>OurAnimeList</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Username</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.login}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => signIn()}>
          <Text style={styles.loginButton1}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.push('Register')}>
          <Text style={styles.loginButton2}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 110,
  },
  titleName: {
    fontSize: 26,
    fontFamily: 'Ubuntu-Bold',
  },
  titleIcon: {
    paddingTop: 3,
    paddingRight: 3,
    color: '#A0D1BB',
  },
  form: {
    marginHorizontal: 30,
    marginBottom: 15,
  },
  formText: {
    marginLeft: 2,
    marginBottom: 5,
    fontSize: 13,
    fontFamily: 'Ubuntu-Regular',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#A0DDBB',
    fontSize: 14,
    fontFamily: 'Ubuntu',
    paddingLeft: 10,
  },
  login: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  loginButton1: {
    marginBottom: 25,
    paddingHorizontal: 80,
    paddingVertical: 25,
    backgroundColor: '#000000',
    color: '#FFFFFF',
    borderRadius: 20,
    fontSize: 16,
    fontFamily: 'Ubuntu-Medium',
  },
  loginButton2: {
    marginBottom: 50,
    paddingHorizontal: 73,
    paddingVertical: 25,
    backgroundColor: '#5F5F5F',
    color: '#FFFFFF',
    borderRadius: 20,
    fontSize: 16,
    fontFamily: 'Ubuntu-Medium',
  },
  forgotPass: {
    color: '#8F8F8F',
    paddingTop: 5,
  },
});
