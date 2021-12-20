import React, {Component} from 'react';
// import {
//   // View,
//   WebView
// } from 'react-native';

import { WebView } from 'react-native-webview';

class Webs extends Component {
  render() {
      return <WebView
      source={{ uri: 'https://docs.midtrans.com/en/snap/overview' }} />;
  }
}