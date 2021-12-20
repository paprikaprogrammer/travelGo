import React, {Component} from 'react';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';

import { WebView } from 'react-native-webview';

class Webs extends Component {
  render() {
      return <WebView
      source={{ uri: 'https://www.tiket.com/pesawat' }} />;
  }
}

const DirectWebview = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar translucent={false} />
            <Webs/>
        </SafeAreaView>
    )
}

export default DirectWebview;
