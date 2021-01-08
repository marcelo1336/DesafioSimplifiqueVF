import React, { Component } from 'react'
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { fetchManifestations } from '../store/actions/manifestation'

import Header from '../components/Header'
import Manifestation from '../components/Manifestation'

class Feed extends Component {
    componentDidMount = () => {
        this.props.onFetchManifestations()
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.props.manifestations}
                    keyExtractor={item => `${item.cpf}`}
                    renderItem={({ item }) =>
                        <Manifestation key={item.cpf} {...item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#c0e6ec',
    }
})

const mapStateToProps = ({ manifestations }) => {
    return {
        manifestations: manifestations.manifestations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchManifestations: () => dispatch(fetchManifestations())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)