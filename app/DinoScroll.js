import React, {Component} from 'react';
import {StyleSheet, Image, ScrollView} from 'react-native';

export class DinoScroll extends Component {
    render(){
        const { horizontal } = this.props

        return (
            <ScrollView horizontal={horizontal}>
                <Image style={[styles.dino]} source={{uri: 'https://www.newdinosaurs.com/wp-content/uploads/2016/01/42_allosaurus_emily_willoughby.jpg'}} />
                <Image style={[styles.dino]} source={{uri: 'https://www.everythingdinosaur.com/wp-content/uploads/2016/10/Bullyland-Pteranodon-model.jpg'}} />
                <Image style={[styles.dino]} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81T1sAImqwL._SX463_.jpg'}} />
                <Image style={[styles.dino]} source={{uri: 'https://target.scene7.com/is/image/Target/23949202?wid=520&hei=520&fmt=pjpeg'}} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    dino: {
        padding: 20,
        height: 220,
        width: 250,
        shadowColor: '#000',
        shadowRadius: 5
    }
})