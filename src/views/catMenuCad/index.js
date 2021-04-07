import * as React from 'react';
import {View, TextInput, StyleSheet, Button, ActivityIndicator} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//import firebase from 'firebase';

import HeaderDrawNav from '../../components/headerDrawNav';
import Input from '../../components/input';
import Botao from '../../components/botao';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import { connect } from 'react-redux';
import { setField, saveCat, resetForm, setAllFields } from '../../actions';

class CatMenuCad extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            pageTitle: ''
        }
    }

    componentDidMount(){
        const {route, setAllFields, resetForm} = this.props;
        const { params } = route;

        if(params && params.catToEdit){
            setAllFields(params.catToEdit)
            this.setState({pageTitle: params.catToEdit.title})
        }else{
            this.setState({pageTitle: 'Nova categoria'})
            resetForm();
        }
    }
    
    

    onChangeHandler(field, valor){
        this.setState({
            [field]: valor
        })
    }

    processCad(){
        this.props.navigation.pop();
    }

    renderButton(catForm, saveCat) {
        if(this.state.isLoading)
            return <ActivityIndicator/>
        return(
            <View style={styles.styleBotao}>
                <Botao label={"Salvar"} onPress={ async ()=> {
                    if(catForm.title === "" && catForm.description === ""){
                        return Alert.alert(
                            'Alerta',
                            'Nome e descrição não podem ser nulos!!',
                            [{
                                text: 'OK',
                                onPress: () =>{
                                }
                            }]
                        )
                    }
                    this.setState({isLoading: true})
                    try{
                        await saveCat(catForm);
                        this.props.navigation.goBack();   
                    }catch(error){
                        Alert.alert('Erro', error.message);
                    }finally{
                        this.setState({isLoading: false});
                    }                                        
                }}
                />                
            </View>
        )
    }
    render(){
        const {catForm, setField, saveCat, navigation} = this.props;
        return(
            <KeyboardAwareScrollView style={{backgroundColor: '#7E39FB'}}>
                <View style={styles.fundo}>
                    <HeaderDrawNav title='Nova Categorias' navigation={this.props.navigation}/>
                    <Input labelInput="Nome:">
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Entre com o nome do produto aqui"
                            value={catForm.title}
                            onChangeText={valor => setField('title', valor)}
                        />                    
                    </Input>
                    <Input labelInput="Descrição:">
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Entre com a descrição do produto aqui"
                            value={catForm.description}
                            onChangeText={valor => setField('description', valor)}
                        />
                    </Input>
                    {
                        this.state.isLoading ?
                            <ActivityIndicator/>
                        :
                        this.renderButton(catForm, saveCat)
                    }
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    fundo:{
        height: '100%',
        backgroundColor: '#7E39FB'
    },
    styleBotao:{
        marginTop:'20%',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        flexDirection:'column',
        height:110,
        alignItems:'center',
    }
})

const mapStateToProps = (state) => {
    return ({
        catForm: state.catForm
    })
}

const mapDispatchToProps = {
    setField,
    saveCat,
    resetForm,
    setAllFields
}

export default connect(mapStateToProps, mapDispatchToProps)(CatMenuCad);