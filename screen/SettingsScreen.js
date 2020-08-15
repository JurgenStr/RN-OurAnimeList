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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from 'D:/Sources/Git/OurAnimeListReact/navigation/context';

export const SettingsScreen = () => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Image
        source={require('D:/Sources/Git/OurAnimeListReact/assets/anonymous.png')}
        style={{width: 125, height: 125, borderRadius: 70}}
      />
      <Text style={styles.username}>Guest</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={() => signOut()}>
        <Text style={styles.signOut}>SIGN OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  signOut: {
    marginVertical: 25,
    paddingHorizontal: 55,
    paddingVertical: 25,
    backgroundColor: '#D63030',
    color: '#FFFFFF',
    borderRadius: 20,
    fontSize: 16,
    fontFamily: 'Ubuntu-Medium',
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Alata-Regular',
    paddingTop: 10,
  },
});
