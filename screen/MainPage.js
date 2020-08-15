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
import AnimeList from './class/AnimeList';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://api.jikan.moe/v3/season');
    const json = await response.json();
    this.setState({data: json.anime});
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Icon style={styles.menuIcon} name="menu" size={32} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Anime List</Text>
          <Text style={styles.headerText}>Anime List</Text>
          <TouchableOpacity onPress={() => {}}>
            <Icon style={styles.menuIcon} name="search" size={26} />
          </TouchableOpacity>
        </View> */}
        <View style={styles.flatList}>
          <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i}
            renderItem={({item}) => <AnimeList data={item} />}
            numColumns={2}
            horizontal={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    color: '#BBFFCE',
  },
  menuIcon: {
    color: '#4F4F4F',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'Ubuntu-Regular',
    alignSelf: 'center',
  },
});
