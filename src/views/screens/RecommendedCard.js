import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, ActivityIndicator, Dimensions } from 'react-native';
import Axios from 'axios';
import COLORS from '../../consts/colors';
import Iconmenu from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
const {width} = Dimensions.get('screen');

export default class RecommendedCard extends Component {
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
      const response = await Axios.get(`https://mocki.io/v1/814e74cf-17b8-456d-83f3-6c891d328c8f`)
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
        <ImageBackground style={styles.rmCardImage} source={{uri: `${item.image}`}}>
            <Text style={styles.textTitleRm}> {item.name}</Text>
            <View
            style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'flex-end',
            }}>
            <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <Iconmenu name="aircraft" size={20} color={COLORS.white} />
                    <Text style={{color: COLORS.white, marginLeft: 5}}>
                        {item.location}
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Icon name="staro" size={22} color={COLORS.white} style={{marginLeft: 10}}/>
                    <Text style={{color: COLORS.white, marginLeft: 5}}>5.0</Text>
                </View>
            </View>
            <Text style={{color: COLORS.white, fontSize: 13}}>
                {item.details}
            </Text>
            </View>
        </ImageBackground>
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
  textItemLogin: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 20,
    fontSize: 16
  },
  textItemUrl: {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 12,
    marginTop: 10,
    color: 'blue'
  },
  textItemDetails:{
    marginLeft: 20,
    fontSize: 12,
    // marginTop: 10,
    color: 'black',
    paddingTop: 10
  },
  textTitleRm : {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    // justifyContent: 'center',
    // margin: 'auto',
  },
})