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

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = NavigationContext;

  render() {
    const navigation = this.context;
    return (
      <View style={styles.container}>
        <Icon
          name="menu"
          size={28}
          onPress={() => navigation.openDrawer()}
          style={styles.icon}
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
