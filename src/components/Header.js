import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import { connect } from 'react-redux'

import icon from '../../assets/imgs/icon.png'

class Header extends Component {
    render() {

        const name = this.props.name || 'Não Logado'

        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <View style={styles.info}>
                        <Text style={styles.title}>Desafio Simplifique</Text>
                        <Text style={styles.user}>Usuário: {name}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#000',
        width: '100%',
        backgroundColor: '#39acc1',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        margin: 10
    },
    info: {
        paddingLeft: 20
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 30
    },
    user: {
        fontSize: 15,
        color: '#000'
    }
})

const mapStateToProps = ({user}) => {
    return {
        email: user.email,
        name: user.name
    }
}

export default connect(mapStateToProps)(Header)