import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.loadingImage}
          source={require('D:/Sources/Git/OurAnimeListReact/assets/logo.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingImage: {
    height: 42,
    width: 540,
  },
});
