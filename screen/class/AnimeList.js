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
  Dimensions,
} from 'react-native';
import {NavigationContext} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconComm from 'react-native-vector-icons/MaterialCommunityIcons';

import {DetailsScreen} from '../DetailsScreen';

const DEVICE = Dimensions.get('window');

export default class AnimeList extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = NavigationContext;

  render() {
    const navigation = this.context;
    return (
      <TouchableOpacity
        style={styles.itemTouchable}
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate('Details', {
            link: `https://api.jikan.moe/v3/anime/${this.props.data.mal_id}`,
          })
        }>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: this.props.data.image_url,
            }}
            style={styles.listThumbnail}
          />
          <Text numberOfLines={2} style={styles.listTitle}>
            {this.props.data.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemTouchable: {
    width: DEVICE.width * 0.5,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    margin: 10,
    alignItems: 'center',
    paddingVertical: 8,
  },
  listThumbnail: {
    width: 112.5,
    height: 154.5,
    borderRadius: 15,
  },
  listTitle: {
    paddingTop: 10,
    paddingHorizontal: 15,
    fontFamily: 'Alata-Regular',
    textAlign: 'center',
    height: 50,
  },
});
