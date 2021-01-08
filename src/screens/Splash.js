import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native'

export default class Splash extends Component {
    componentDidMount = () => {
        setTimeout(
            () => {this.props.navigation.navigate('App')},
            1500
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/imgs/logo.jpg')}
                    style={styles.image} />
                    <Text style={styles.header}>Desafio Simplifique</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#88cfdc',
    },
    image: {
        height: 400,
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
        borderRadius: 10,
        paddingHorizontal: 10
    },
    header: {
        fontSize: 45,
        fontFamily: 'shelter',
        textAlign: 'center'
    }
})