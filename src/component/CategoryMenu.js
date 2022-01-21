import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class CategoryMenu extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{width: '25%', alignItems:'center'}}>
                <Image style={style.categoryImg} source={this.props.image}></Image>
                <Text style={style.categoryTxt}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
} 

const style = StyleSheet.create({
    categoryContainer:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 55,
        marginHorizontal: 28,
    },
    categoryImg : {
        width: 50,
        height: 50,
        marginTop: 10
    },
    categoryTxt: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 12
    }
})

export default CategoryMenu