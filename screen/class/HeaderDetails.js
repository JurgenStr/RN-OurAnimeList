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

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconComm from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContext} from '@react-navigation/native';

export default class HeaderDetails extends Component {
  static contextType = NavigationContext;
  render() {
    const navigation = this.context;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Details</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 92,
    bottom: -13,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
