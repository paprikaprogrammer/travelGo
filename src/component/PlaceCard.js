import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import Axios from 'axios';
import COLORS from '../consts/colors';
import Iconmenu from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
const {width} = Dimensions.get('screen');
// const {navigation} = this.props;

export default class PlaceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      isError: false
    };
  }

  // user method
  componentDidMount() {
    this.getRecomen()
  }

  // get api user
  getRecomen = async () => {
    try {
      const response = await Axios.get(`https://mocki.io/v1/8c77ae77-964c-4bf0-b4d5-dd7c090c50d2`)
      this.setState({ isError: false, isLoading: false, data: response.data })
    } catch (error) {
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    //  load data
    if (this.state.isLoading) {
      return (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <ActivityIndicator size='large' color='lightgray' />
        </View>
      )
    }
    // data no fetch
    else if (this.state.isError) {
      return (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <Text>Terjadi Error Saat Memuat Data</Text>
        </View>
      )
    }
    // data finish load
    return (
      <FlatList
        contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={this.state.data}
        renderItem={({ item }) =>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DetailsScreen')}>
            <ImageBackground  style={styles.cardImage} source={{uri: `${item.image}`}}>
            <Text
                style={{
                color: COLORS.white,
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
                }}>
                {item.name}
            </Text>
            <View
                style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'flex-end',
                }}>
                <View style={{flexDirection: 'row'}}>
                <Iconmenu name="aircraft" size={20} color={COLORS.white} />
                <Text style={{marginLeft: 5, color: COLORS.white}}>
                    {item.location}
                </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Icon name="staro" size={20} color={COLORS.white} />
                <Text style={{marginLeft: 5, color: COLORS.white}}>5.0</Text>
                </View>
            </View>
            </ImageBackground>
        </TouchableOpacity>
        }
        keyExtractor={({ id }, index) => index}
      />
    );
  }
}

const styles = StyleSheet.create({
  viewList: {
    height: 150,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center'
  },
  Image: {
    width: 88,
    height: 80,
    borderRadius: 40
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
    opacity: 0.8,
    backgroundColor: 'black'
  },
})