import {
    SET_MANIFESTATIONS,
    CREATING_MANIFESTATION,
    MANIFESTATION_CREATED
} from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'
import {userII} from './user'

export const addManifestation = manifestation => {

    return dispatch => {
        dispatch(creatingManifestation())
        axios.post(`manifestations/${userII}.json`, { ...manifestation })
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Erro na manifestação1'
                }))
            })
            .then(res => {
                dispatch(fetchManifestations())
                dispatch(manifestationCreated())
            })
    }
}

export default setManifestations = manifestations => {
    return {
        type: SET_MANIFESTATIONS,
        payload: manifestations
    }
}

export const fetchManifestations = () => {
    return dispatch => {
        axios.get(`manifestations/${userII}.json`)
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Erro na manifestação'
                }))
            })
            .then(res => {
                console.log('aqui',userII)
                const rawManifestations = res.data
                const manifestations = []
                for (let key in rawManifestations) {
                    manifestations.push({
                        ...rawManifestations[key],
                        id: key
                    })
                }
                dispatch(setManifestations(manifestations.reverse()))
            })
    }
}



export const creatingManifestation = () => {
    return {
        type: CREATING_MANIFESTATION
    }
}

export const manifestationCreated = () => {
    return {
        type: MANIFESTATION_CREATED
    }
}