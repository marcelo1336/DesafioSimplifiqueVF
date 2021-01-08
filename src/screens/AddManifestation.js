import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback as TWF,
    TextInput,
    ScrollView,
    Alert,
    Picker
} from 'react-native'
import { connect } from 'react-redux'

import { addManifestation } from '../store/actions/manifestation'
import Header from '../components/Header'

const noUser = 'Você precisa se Logar para adicionar uma Manifestação'
const noCorrect = 'Preencha tudo corretamente'

class AddManifestation extends Component {
    state = {
        editMode: false,
        typeM: '',
        receiverM: '',
        subjectM: '',
        informationM: '',
        ufM: '',
        cityM: '',
        localM: ''
    }

    componentDidUpdate = prevProps => {
        if (prevProps.loading && !this.props.loading) {
            this.setState({
                typeM: '',
                receiverM: '',
                subjectM: '',
                informationM: '',
                ufM: '',
                cityM: '',
                localM: ''
            })
            this.props.navigation.navigate('Feed')
        }
    }

    save = async () => {
        if (!this.props.name) {
            Alert.alert(noUser)
            return
        }
        if (!this.state.typeM || !this.state.receiverM ||
            !this.state.subjectM || !this.state.informationM ||
            !this.state.ufM || !this.state.cityM || !this.state.localM) {
            Alert.alert(noCorrect)
            return
        }
        this.props.onAddManifestation({
            id: Math.random(),
            typeM: this.state.typeM,
            receiverM: this.state.receiverM,
            subjectM: this.state.subjectM,
            informationM: this.state.informationM,
            ufM: this.state.ufM,
            cityM: this.state.cityM,
            localM: this.state.localM,
        })
    }

    render() {
        return (
            <ScrollView>
                <Header />
                <View style={styles.container}>

                    <View style={styles.infUser}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.infTextTitle}> Suas informações</Text>
                        </View>
                        <Text style={styles.infUserText}> Email:  {this.props.email}</Text>
                        <Text style={styles.infUserText}> Nome:  {this.props.name}</Text>
                        <Text style={styles.infUserText}> CPF:  {this.props.cpf}</Text>
                    </View>

                    <View style={styles.titleView}>
                        <Text style={styles.title}>Adicione uma manifestação</Text>
                    </View>


                    <Picker
                        selectedValue={this.state.typeM}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ typeM: itemValue })}
                        onChangeText={typeM => this.setState({ typeM })}
                    >

                        <Picker.Item label="O que você quer fazer?   Selecione" />
                        <Picker.Item label="Solicitar acesso a informações" value="Acesso á informação" />
                        <Picker.Item label="Comunicar um ato ilícito" value="Denúncia" />
                        <Picker.Item label="Expressar satisfação" value="Elogio" />
                        <Picker.Item label="Manisfestar insatisfação" value="Reclamação" />
                        <Picker.Item label="Sugerir uma simplificação" value="Simplifique" />
                        <Picker.Item label="Fazer uma solicitação" value="Solicitação" />
                        <Picker.Item label="Enviar uma sugestão" value="Sugestão" />

                    </Picker>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>Tipo de manifestação: </Text>
                        <TextInput placeholder='Nenhum selecionado'
                            style={styles.inputText}
                            value={this.state.typeM}
                            onChangeText={typeM => this.setState({ typeM })} />
                    </View>

                    <View style={styles.titleView}>
                        <Text style={styles.title}>Orgão para o qual você quer enviar sua manifestação</Text>
                    </View>

                    <Text>Selecione o Orgão</Text>
                    <Picker
                        selectedValue={this.state.receiverM}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ receiverM: itemValue })}
                        onChangeText={typeM => this.setState({ typeM })}>

                        <Picker.Item label="Selecione" />
                        <Picker.Item label="Câmara - Marilândia/ES" value="Câmara - Marilândia/ES" />
                        <Picker.Item label="Câmara de Vereadores - Candelas/BA" value="Câmara de Vereadores - Candelas/BA" />
                        <Picker.Item label="Câmara Legislativa - Brasilândia/MS" value="Câmara Legislativa - Brasilândia/MS" />
                        <Picker.Item label="Câmara Municipal - Alto Paraiso/RO" value="Câmara Municipal - Alto Paraiso/RO" />
                        <Picker.Item label="Câmara Municipal - Bertioga/SP" value="Câmara Municipal - Bertioga/SP" />
                        <Picker.Item label="Câmara Municipal - Brunópolis/SC" value="Câmara Municipal - Brunópolis/SC" />
                        <Picker.Item label="Câmara Municipal - Colorado do Oeste/RO" value="Câmara Municipal - Colorado do Oeste/RO" />
                        <Picker.Item label="Câmara Municipal - Espigão D'Oeste/RO" value="Câmara Municipal - Espigão D'Oeste/RO" />
                        <Picker.Item label="Câmara Municipal - Itapuã do Oeste/RO" value="Câmara Municipal - Itapuã do Oeste/RO" />
                        <Picker.Item label="Câmara Munucipal - Itararé/SP" value="Câmara Munucipal - Itararé/SP" />
                        <Picker.Item label="Câmara Municipal - jaru/RO" value="Câmara Municipal - jaru/RO" />
                        <Picker.Item label="Câmara Municipal - Ministro Andreazza/RO" value="Câmara Municipal - Ministro Andreazza/RO" />
                        <Picker.Item label="Câmara Municipal - Monte Mor/SP" value="Câmara Municipal - Monte Mor/SP" />
                        <Picker.Item label="Câmara Municipal - Pedranópolis/SP" value="Câmara Municipal - Pedranópolis/SP" />
                        <Picker.Item label="Câmara Municipal - Piratininga/SP" value="Câmara Municipal - Piratininga/SP" />
                        <Picker.Item label="Câmara Municipal - Prata/MG" value="Câmara Municipal - Prata/MG" />
                        <Picker.Item label="Câmara Municipal - Presidente Médio/RO" value="Câmara Municipal - Presidente Médio/RO" />
                        <Picker.Item label="Câmara Municipal - Redenção da Serra/SP" value="Câmara Municipal - Redenção da Serra/SP" />
                        <Picker.Item label="Câmara Municipal - Ribeirão Preto/SP" value="Câmara Municipal - Ribeirão Preto/SP" />
                        <Picker.Item label="Câmara Municipal - Rio Crespo/RO" value="Câmara Municipal - Rio Crespo/RO" />
                        <Picker.Item label="Câmara Municipal - Urupá/RO" value="Câmara Municipal - Urupá/RO" />
                        <Picker.Item label="Câmara Municipal - Urupês/SP" value="Câmara Municipal - Urupês/SP" />
                        <Picker.Item label="Câmara Munucipal - Vale do Paraiso/RO" value="Câmara Munucipal - Vale do Paraiso/RO" />
                        <Picker.Item label="Câmara Municipal - Abdon Batista/SC" value="Câmara Municipal - Abdon Batista/SC" />
                        <Picker.Item label="Câmara Municipal - Afonso Bezerra/RN" value="Câmara Municipal - Afonso Bezerra/RN" />
                        <Picker.Item label="Câmara Municipal - Agrestina/PE" value="Câmara Municipal - Agrestina/PE" />
                        <Picker.Item label="Câmara Municipal - Agrolândia/SC" value="Câmara Municipal - Agrolândia/SC" />
                        <Picker.Item label="Câmara Municipal - Agronômica/SC" value="Câmara Municipal - Agronômica/SC" />
                        <Picker.Item label="Prefeitura - Alcântaras/CE" value="Prefeitura - Alcântaras/CE" />
                        <Picker.Item label="Prefeitura - Alcinópolis/MS" value="Prefeitura - Alcinópolis/MS" />
                        <Picker.Item label="Prefeitura - Anastácio/MS" value="Prefeitura - Anastácio/MS" />
                        <Picker.Item label="Prefeitura - Araguainha/MS" value="Prefeitura - Araguainha/MS" />
                        <Picker.Item label="Prefeitura - Areia Branca/SE" value="Prefeitura - Areia Branca/SE" />
                        <Picker.Item label="Prefeitura - Blumenau/SC" value="Prefeitura - Blumenau/SC" />
                        <Picker.Item label="Prefeitura - Cafelândia/SP" value="Prefeitura - Cafelândia/SP" />
                        <Picker.Item label="Prefeitura - Cunhatai/SC" value="Prefeitura - Cunhatai/SC" />
                        <Picker.Item label="Prefeitura - Deodápolis/MS" value="Prefeitura - Deodápolis/MS" />
                        <Picker.Item label="Prefeitura - Dois Corregos/SP" value="Prefeitura - Dois Corregos/SP" />
                        <Picker.Item label="Prefeitura - Glória de Dourados/MS" value="Prefeitura - Glória de Dourados/MS" />
                        <Picker.Item label="Prefeitura - Içara/SC" value="Prefeitura - Içara/SC" />
                        <Picker.Item label="Prefeitura - Iguatemi/MS" value="Prefeitura - Iguatemi/MS" />
                        <Picker.Item label="Prefeitura - Iracemápolis/SP" value="Prefeitura - Iracemápolis/SP" />
                        <Picker.Item label="Prefeitura - Mafra/SC" value="Prefeitura - Mafra/SC" />
                        <Picker.Item label="Prefeitura - Mogi-Mirim/SP" value="Prefeitura - Mogi-Mirim/SP" />
                        <Picker.Item label="Prefeitura - Paraquira-Açu/SP" value="Prefeitura - Paraquira-Açu/SP" />
                        <Picker.Item label="Prefeitura - Porangaba/SP" value="Prefeitura - Porangaba/SP" />
                        <Picker.Item label="Prefeitura - Propriá/SE" value="Prefeitura - Propriá/SE" />
                        <Picker.Item label="Prefeitura - Riachuelo/SE" value="Prefeitura - Riachuelo/SE" />
                        <Picker.Item label="Prefeitura - Rochedo/MS" value="Prefeitura - Rochedo/MS" />
                        <Picker.Item label="Prefeitura - Salto Veloso/SC" value="Prefeitura - Salto Veloso/SC" />
                        <Picker.Item label="Prefeitura - São Bonifácio/SC" value="Prefeitura - São Bonifácio/SC" />
                        <Picker.Item label="Prefeitura - São Manuel/SP" value="Prefeitura - São Manuel/SP" />
                        <Picker.Item label="Prefeitura - Sete Quedas/MS" value="Prefeitura - Sete Quedas/MS" />
                        <Picker.Item label="Prefeitura - Abdon Batista/SC" value="Prefeitura - Abdon Batista/SC" />
                        <Picker.Item label="Prefeitura - Abelardo Luz/SC" value="Prefeitura - Abelardo Luz/SC" />
                        <Picker.Item label="Prefeitura - Agrolândia/SC" value="Prefeitura - Agrolândia/SC" />
                        <Picker.Item label="Prefeitura - Agronômica/SC" value="Prefeitura - Agronômica/SC" />
                        <Picker.Item label="Prefeitura - Água branca/PB" value="Prefeitura - Água branca/PB" />
                        <Picker.Item label="Prefeitura - Água Doce/SC" value="Prefeitura - Água Doce/SC" />
                        <Picker.Item label="Prefeitura - Águas Belas/PE" value="Prefeitura - Águas Belas/PE" />
                        <Picker.Item label="Prefeitura - Águas Frias/SC" value="Prefeitura - Águas Frias/SC" />
                        <Picker.Item label="Prefeitura - Águas Mornas/SC" value="Prefeitura - Águas Mornas/SC" />
                        <Picker.Item label="Prefeitura - Alagoinha do Piaui/PI" value="Prefeitura - Alagoinha do Piaui/PI" />
                        <Picker.Item label="Prefeitura - Alagoinha/PB" value="Prefeitura - Alagoinha/PB" />
                        <Picker.Item label="Prefeitura - Timon/MA" value="Prefeitura - Timon/MA" />
                        <Picker.Item label="Prefeitura - Abreulândia/TO" value="Prefeitura - Abreulândia/TO" />
                        <Picker.Item label="Prefeitura - Anamã/AM" value="Prefeitura - Anamã/AM" />
                        <Picker.Item label="Prefeitura - Angicos/RN" value="Prefeitura - Angicos/RN" />
                        <Picker.Item label="Prefeitura - Apui/AM" value="Prefeitura - Apui/AM" />
                        <Picker.Item label="Prefeitura - Araguanã/TO" value="Prefeitura - Araguanã/TO" />

                    </Picker>

                    <View style={styles.titleView}>
                        <Text style={styles.title}>Descrição</Text>
                    </View>

                    <Text>Selecione o Assunto</Text>
                    <Picker
                        selectedValue={this.state.subjectM}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ subjectM: itemValue })}
                        onChangeText={typeM => this.setState({ typeM })}>

                        <Picker.Item label="Selecione" />
                        <Picker.Item label="Abastecimento" value="Abastecimento" />
                        <Picker.Item label="Abono Salarial" value="Abono Salarial" />
                        <Picker.Item label="Acesso á informação" value="Acesso á informação" />
                        <Picker.Item label="Aduana" value="Aduana" />
                        <Picker.Item label="Aeronáutica" value="Aeronáutica" />
                        <Picker.Item label="Agendamento" value="Agendamento" />
                        <Picker.Item label="Agente Público" value="Agente Público" />
                        <Picker.Item label="Agricultura" value="Agricultura" />
                        <Picker.Item label="Água" value="Água" />
                        <Picker.Item label="Alimentação Animal" value="Alimentação Animal" />
                        <Picker.Item label="Animais" value="Animais" />
                        <Picker.Item label="Aposentadoria" value="Aposentadoria" />
                        <Picker.Item label="Armamento" value="Armamento" />
                        <Picker.Item label="Assédio Moral" value="Assédio Moral" />
                        <Picker.Item label="Assédio Sexual" value="Assédio Sexual" />
                        <Picker.Item label="Assentamento" value="Assentamento" />
                        <Picker.Item label="Assitência ao Idoso" value="Assitência ao Idoso" />
                        <Picker.Item label="Atendimento" value="Atendimento" />
                        <Picker.Item label="Atendimento Básico" value="Atendimento Básico" />
                        <Picker.Item label="Auditoria" value="Auditoria" />
                        <Picker.Item label="Auxilio" value="Auxilio" />
                        <Picker.Item label="Avaliação da Conformidade" value="Avaliação da Conformidade" />
                        <Picker.Item label="Bancos" value="Bancos" />
                        <Picker.Item label="Benefício" value="Benefício" />
                        <Picker.Item label="Benefícios Sociais" value="Benefícios Sociais" />
                        <Picker.Item label="Bibliotecas" value="Bibliotecas" />
                        <Picker.Item label="Biodiversidade" value="Biodiversidade" />
                        <Picker.Item label="Bolsas" value="Bolsas" />
                        <Picker.Item label="Cadastro" value="Cadastro" />
                        <Picker.Item label="Certidões e Declarações" value="Certidões e Declarações" />
                        <Picker.Item label="Cidadania" value="Cidadania" />
                        <Picker.Item label="Cinema" value="Cinema" />
                        <Picker.Item label="Cirurgia" value="Cirurgia" />
                        <Picker.Item label="Clima" value="Clima" />
                        <Picker.Item label="Combate á Desigualdade" value="Combate á Desigualdade" />
                        <Picker.Item label="Combate a Epidemias" value="Combate a Epidemias" />
                        <Picker.Item label="Combate a pobleza" value="Combate a pobleza" />
                        <Picker.Item label="Combustiveis" value="Combustiveis" />
                        <Picker.Item label="Comercio externo" value="Comercio externo" />
                        <Picker.Item label="Comunicações Postais" value="Comunicações Postais" />
                        <Picker.Item label="Concurso" value="Concurso" />
                        <Picker.Item label="Conduta Docente" value="Conduta Docente" />
                        <Picker.Item label="Conteúdo Jornalistico" value="Conteúdo Jornalistico" />
                        <Picker.Item label="Controle Social" value="Controle Social" />
                        <Picker.Item label="Convênio" value="Convênio" />
                        <Picker.Item label="Cooperação Internacional" value="Cooperação Internacional" />
                        <Picker.Item label="Coronavirus (COVID-19)" value="Coronavirus (COVID-19)" />
                        <Picker.Item label="Correição" value="Correição" />
                        <Picker.Item label="Correios" value="Correios" />
                        <Picker.Item label="Corrupção" value="Corrupção" />
                        <Picker.Item label="Cotas" value="Cotas" />
                        <Picker.Item label="Curso Técnico" value="Curso Técnico" />
                        <Picker.Item label="Dados Pessoais" value="Dados Pessoais" />
                        <Picker.Item label="Defesa Civil" value="Defesa Civil" />
                        <Picker.Item label="Defesa da Concorrência" value="Defesa da Concorrência" />
                        <Picker.Item label="Defesa do Consumidor" value="Defesa do Consumidor" />
                        <Picker.Item label="Defesa Militar" value="Defesa Militar" />
                        <Picker.Item label="Denúncia Crime" value="Denúncia Crime" />
                        <Picker.Item label="Difusão" value="Difusão" />
                        <Picker.Item label="Difusão Cultural" value="Difusão Cultural" />

                    </Picker>


                    <TextInput placeholder='Descreva o conteúdo de sua manifestação aqui'
                        style={styles.inputText}
                        multiline={true} maxLength={200}
                        value={this.state.informationM}
                        onChangeText={informationM => this.setState({ informationM })} />

                    <View style={styles.titleView}>
                        <Text style={styles.title}>Local do Fato</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Picker style={{ width: '45%' }}
                            selectedValue={this.state.ufM}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ ufM: itemValue })}
                            onChangeText={typeM => this.setState({ typeM })}>

                            <Picker.Item label="Selecionar UF" />
                            <Picker.Item label="AC" value="AC" />
                            <Picker.Item label="AL" value="AL" />
                            <Picker.Item label="AM" value="AM" />
                            <Picker.Item label="AP" value="AP" />
                            <Picker.Item label="BA" value="BA" />
                            <Picker.Item label="CE" value="CE" />
                            <Picker.Item label="DF" value="DF" />
                            <Picker.Item label="ES" value="ES" />
                            <Picker.Item label="GO" value="GO" />
                            <Picker.Item label="MA" value="MA" />
                            <Picker.Item label="MG" value="MG" />
                            <Picker.Item label="MS" value="MS" />
                            <Picker.Item label="MT" value="MT" />
                            <Picker.Item label="PA" value="PA" />
                            <Picker.Item label="PB" value="PB" />
                            <Picker.Item label="PE" value="PE" />
                            <Picker.Item label="PI" value="PI" />
                            <Picker.Item label="PR" value="PR" />
                            <Picker.Item label="RJ" value="RJ" />
                            <Picker.Item label="RN" value="RN" />
                            <Picker.Item label="RO" value="RO" />
                            <Picker.Item label="RR" value="RR" />
                            <Picker.Item label="RS" value="RS" />
                            <Picker.Item label="SC" value="SC" />
                            <Picker.Item label="SE" value="SE" />
                            <Picker.Item label="SP" value="SP" />
                            <Picker.Item label="TO" value="TO" />

                        </Picker>

                        <TextInput placeholder='Municipio'
                            style={styles.inputText}
                            maxLength={30}
                            value={this.state.cityM}
                            onChangeText={cityM => this.setState({ cityM })} />
                    </View>

                    <TextInput placeholder='Local'
                        style={styles.inputText}
                        multiline={true}
                        maxLength={100}
                        value={this.state.localM}
                        onChangeText={localM => this.setState({ localM })} />

                    <View style={{ alignItems: 'center' }}>

                        <TouchableOpacity onPress={this.save}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#88cfdc',
        justifyContent: 'center',
        padding: 20
    },
    titleView: {
        backgroundColor: '#FFF',
        padding: 5,
        margin: 10,
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        color: '#000'
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    },
    inputText: {
        fontSize: 15
    },
    infUser: {
        backgroundColor: '#88bac3',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    infTextTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    infUserText: {
        fontSize: 18
    }
})

const mapStateToProps = ({ user, manifestations }) => {
    return {
        email: user.email,
        name: user.name,
        cpf: user.cpf,
        loading: manifestations.isUploading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddManifestation: manifestation => dispatch(addManifestation(manifestation))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddManifestation)