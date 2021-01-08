import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { connect } from 'react-redux'
import { createUser } from '../store/actions/user'

class Register extends Component {


    state = {
        name: '',
        cpf: '',
        email: '',
        password: ''
    }

    componentDidUpdate = prevProvs => {
        if (prevProvs.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Profile')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Nome' style={styles.input}
                    autoFocus value={this.state.name}
                    onChangeText={name => this.setState({ name })} />


                <TextInput placeholder='Email' style={styles.input}
                    keyboardType='email-address' value={this.state.email}
                    onChangeText={email => this.setState({ email })} />

                <TextInput placeholder='CPF' style={styles.input}
                    keyboardType='number-pad' maxLength={11}
                    value={this.state.cpf}
                    onChangeText={cpf => this.setState({ cpf })} />

                <TextInput placeholder='Senha' style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ password })} />

                <TouchableOpacity
                    onPress={() => { this.props.onCreateUser(this.state) }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#88cfdc'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        height: 40,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15,
        borderRadius: 10
    }
})

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)