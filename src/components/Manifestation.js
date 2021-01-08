import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class Manifestation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Tipo: {this.props.typeM}</Text>
                <View style={styles.line} />
                <Text style={styles.text}>Destinatário: {this.props.receiverM}</Text>
                <View style={styles.line} />
                <Text style={[styles.text, styles.textCenter]}>Descrição</Text>
                <Text style={styles.text}>Assunto: {this.props.subjectM}</Text>
                <Text style={styles.text}>{this.props.informationM}</Text>
                <View style={styles.line} />
                <Text style={[styles.text, styles.textCenter]}>Local</Text>
                <Text style={styles.text}> UF: {this.props.ufM}</Text>
                <Text style={styles.text}> Municipio: {this.props.cityM} </Text>
                <Text style={styles.text}> Local: {this.props.localM} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        padding: 5,
        backgroundColor: '#88bac3',
        borderTopColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 15,
    },
    text: {
        fontSize: 20,
    },
    textCenter: {
        textAlign: 'center'
    },
    line: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 5
    }
})

export default Manifestation