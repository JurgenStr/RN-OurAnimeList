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
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from './LoginScreen';

export default class AboutScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topScreen}></View>
        <View style={styles.profilePic}>
          <Image
            source={require('D:/Sources/Git/OurAnimeListReact/assets/profile.png')}
            style={{width: 150, height: 150, borderRadius: 75}}
          />
        </View>
        <View style={styles.identity}>
          <Text style={styles.identityName}>Juandito Batara</Text>
          <Text style={styles.identityDesc1}>@jurgenstr</Text>
          <Text style={styles.identityDesc2}>Computer Science</Text>
        </View>
        <View style={styles.linkList}>
          <View style={styles.linkUnit}>
            <Icon style={styles.linkIcon} name="link" size={25} />
            <TouchableOpacity
              onPress={() => Linking.openURL('https://github.com/JurgenStr')}>
              <Text style={styles.linkText}>github.com/JurgenStr</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linkUnit}>
            <Icon style={styles.linkIcon} name="link" size={25} />
            <TouchableOpacity
              onPress={() => Linking.openURL('https://gitlab.com/JurgenStrek')}>
              <Text style={styles.linkText}>gitlab.com/JurgenStrek</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icons: {
    margin: 10,
    color: '#5F5F5F',
  },
  profilePic: {
    alignItems: 'center',
    marginTop: 120,
    marginBottom: 30,
  },
  identity: {
    alignItems: 'center',
  },
  identityName: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Alata-Regular',
  },
  identityDesc1: {
    fontSize: 18,
    color: '#7F7F7F',
    fontFamily: 'Alata-Regular',
  },
  identityDesc2: {
    fontSize: 18,
    fontFamily: 'Alata-Regular',
  },
  linkList: {
    marginTop: 70,
  },
  linkUnit: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkIcon: {
    marginRight: 5,
  },
  linkText: {
    fontWeight: 'bold',
    fontSize: 20,

    color: '#19722C',
  },
  menuIcon: {
    paddingTop: 15,
    paddingLeft: 15,
    color: '#4F4F4F',
  },
});
