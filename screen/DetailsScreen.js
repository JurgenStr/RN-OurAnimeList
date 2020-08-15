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

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconComm from 'react-native-vector-icons/MaterialCommunityIcons';

const DEVICE = Dimensions.get('window');

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchData();
    console.log(this.props.route.params.link);
  }

  fetchData = async () => {
    const response = await fetch(this.props.route.params.link);
    const json = await response.json();
    this.setState({data: json});
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.titleCard}>
            <Image
              source={{
                uri: this.state.data.image_url,
              }}
              style={styles.listThumbnail}
            />
            <View style={styles.infoCard}>
              <View style={styles.titleBox}>
                {/* <IconComm name="subtitles-outline" size={26} /> */}
                <Text style={styles.titleText}>{this.state.data.title}</Text>
              </View>
              <View style={styles.ratingBox}>
                <Icon name="live-tv" size={26} />
                <Text style={styles.airStatus}>{this.state.data.status}</Text>
              </View>
              <View style={styles.ratingBox}>
                <Icon name="star-border" size={26} />
                {this.state.data.score != null ? (
                  <Text style={styles.ratingScore}>
                    {this.state.data.score}
                  </Text>
                ) : (
                  <Text style={styles.ratingScore}>Not yet rated</Text>
                )}
              </View>
            </View>
          </View>
          <View style={styles.synopsisBox}>
            <Text style={styles.synopsisTitle}>Synopsis</Text>
            {this.state.data.synopsis != null ? (
              <Text style={styles.synopsisText}>
                {this.state.data.synopsis}
              </Text>
            ) : (
              <Text style={styles.synopsisText}>No synopsis yet.</Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  titleCard: {
    flexDirection: 'row',
    width: DEVICE.width * 0.66,
    height: DEVICE.height * 0.2,
  },
  infoCard: {paddingHorizontal: 10},
  titleBox: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Ubuntu-Bold',
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingScore: {
    paddingTop: 2,
    paddingLeft: 2,
    fontFamily: 'Ubuntu-Bold',
  },
  airStatus: {
    paddingLeft: 3,
    paddingTop: 4,
    fontFamily: 'Ubuntu-Bold',
  },
  listThumbnail: {
    width: 112.5,
    height: 154.5,
    borderRadius: 15,
  },
  synopsisBox: {
    paddingVertical: 10,
  },
  synopsisTitle: {
    fontSize: 20,
    fontFamily: 'Ubuntu-Medium',
    paddingBottom: 10,
  },
  synopsisText: {
    fontSize: 15,
    fontFamily: 'Mukta-Medium',
  },
});

// const link = route.params.link;
// const [animeJson, setAnimeJson] = React.useState(null);

// const fetchData = async () => {
//   const response = await fetch(link);
//   const json = await response.json();
//   setAnimeJson(json);
//   console.log('test');
// };

// React.useEffect(() => {
//   this.fetchData();
// }, []);
