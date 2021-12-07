import React, {Component} from 'react';
import {
  View,
  WebView
} from 'react-native';

import { WebView } from 'react-native-webview';

const webviews = {
  render() {
    return (
        <View style={{ flex: 0, paddingTop:20, flexDirection:'row', justifyContent: 'center',  backgroundColor: 'white'}}>
            <WebView source={{uri: 'https://shopee.co.id/'}} />
        </View>
    );
  }
}

export default webviews;