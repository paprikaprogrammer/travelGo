import React, { Component, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, ActivityIndicator, Dimensions, Image } from 'react-native';
import Axios from 'axios';
import COLORS from '../../../consts/colors';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const {width} = Dimensions.get('screen');
// const [loading, setLoading] = useState(true);

export default class RecommendedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      isError: false
    };
  }

  componentDidMount() {
    this.getRecomen()
  }

  getRecomen = async () => {
    try {
      const response = await Axios.get(`https://mocki.io/v1/d6de74a2-5ac1-4e3f-96f9-81dd94db457f`)
      this.setState({ isError: false, isLoading: false, data: response.data })
    } catch (error) {
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    //  load data
    if (this.state.isLoading) {
      return (
        <SkeletonPlaceholder flexDirection="row" alignItems="center">
            <SkeletonPlaceholder.Item>
              <SkeletonPlaceholder.Item width={355} height={160} borderRadius={10} />
              <SkeletonPlaceholder.Item width={355} height={20} borderRadius={10} marginTop={5}></SkeletonPlaceholder.Item>
              <SkeletonPlaceholder.Item width={355} height={20} borderRadius={10} marginTop={5} marginBottom={20}></SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item>
              <SkeletonPlaceholder.Item width={355} height={160} borderRadius={10} />
              <SkeletonPlaceholder.Item width={355} height={20} borderRadius={10} marginTop={5}></SkeletonPlaceholder.Item>
              <SkeletonPlaceholder.Item width={355} height={20} borderRadius={10} marginTop={5} marginBottom={20}></SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        // <View
        //   style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        // >
        //   <ActivityIndicator size='large' color='lightgray' />
        // </View>
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
      <View>
         <View style={style.wrapTitle}>
              <Text style={style.title}>Hore! Mari kita liburan..</Text>
              <Text style={style.titleFav}>Tempat farovit kembali dibuka dan aman dikunjungi. Yuk, Pesan sekarang</Text>
          </View>
          <FlatList
              contentContainerStyle={{paddingBottom: 20}}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={this.state.data}
              renderItem={({ item }) =>
              <ScrollView showsVerticalScrollIndicator={false}>
                  <View
                  style={style.containers}>
                      {/* <View style={{flexDirection:'row'}}> */}
                          <View style={style.wrapper}>
                              <Image style={style.warpImg} source={{uri: `${item.image}`}}></Image>
                              <View style={style.wrapBoxTxt}>
                                  <View style={style.containTxt}>
                                      <Text style={style.warpTxt}>{item.Voucher}</Text>
                                      <Text style={{fontSize:11}}>{item.place}</Text>
                                  </View>
                              </View>
                          </View>
                      {/* </View> */}
                  </View>
              </ScrollView>
              }
              keyExtractor={({ id }, index) => index}
          />
      </View>
    );
  }
}

const style = StyleSheet.create({
    header: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    containers: {
        backgroundColor: COLORS.white,
        // height: 500,
        paddingHorizontal: 20,
        paddingBottom: 20,
        // borderTopStartRadius: 30,
        // borderTopEndRadius: 30,
        paddingTop: 25,
        // marginTop: 40,
        elevation: 20,
    },
    // containTxt: {
    //   width: width / 3 - 27,
    // },
    wrapper: {
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 8,
        width: width / 2.2 - 27,
        // marginRight: 18,
        marginBottom: 18,
        marginTop: 5
    },
    warpImg :{
        height: width/2.2-27,
        width: width/2.2-27,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    warpTxt:{
        // marginLeft: 8,
        // marginTop: 10,
        fontWeight: 'bold',
    },
    wrapBoxTxt :{
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 5
    },
    wrapTxtIdr: {
        color: 'red',
        fontWeight: 'bold'
    },
    wrapTxtNormalPrice : {
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
        fontSize: 11
    },  
    wrapDisc: {
        position: 'absolute',
        top: 10,
        backgroundColor: 'white',
        padding: 4,
    },
    wrapTitle :{
        paddingVertical: 30,
        paddingHorizontal: 20,
        textAlign: 'center',
        backgroundColor: COLORS.white,
    },
    title :{
        fontWeight: 'bold',
        fontSize: 18
    },
    titleFav :{
        fontSize: 13
    }
});