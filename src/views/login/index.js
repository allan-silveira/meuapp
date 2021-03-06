import * as React from 'react';
import {View, TextInput, StyleSheet, Image, Button, Text, Alert, ActivityIndicator} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import firebase from 'firebase';

import Input from '../../components/input';
import PasswordInput from '../../components/passwordInput';
import Botao from '../../components/botao';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import {connect} from 'react-redux';
import {processLogin} from '../../actions';

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: "",
            label: "",
            passwordIcon: "eye-slash",
            visible: true
        }
    }

    componentDidMount() {
        if(! firebase.apps.length){
            var firebaseConfig = {
                apiKey: "AIzaSyDGcR9PP66tM8FbFsmoJEZoXtmk3Rj5dQA",
                authDomain: "gerseries-5ec78.firebaseapp.com",
                databaseURL: "https://gerseries-5ec78-default-rtdb.firebaseio.com",
                projectId: "gerseries-5ec78",
                storageBucket: "gerseries-5ec78.appspot.com",
                messagingSenderId: "392940301651",
                appId: "1:392940301651:web:2075e16229164138d845a6",
                measurementId: "G-N6WEQC7HDN"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        }
    }

    onChangeHandler(field, valor){
        this.setState({
            [field]: valor
        })
    }

    processLogin(){
        this.setState({ isLoading: true});
        const {email, password} = this.state;
        this.props.processLogin({email, password})
        .then( user => {
            if(user){
                {this.cleanInput()};
                this.props.navigation.replace('Menu');
            }else{
                this.setState({
                    isLoading: false,
                    message: ""
                })
            }
        })
        .catch(error => {
            this.setState({ 
                isLoading: false,
                message: this.getMessageByError(error.code)});
        })
    }

    getMessageByError(code){
        switch(code) {
            case "auth/invalid-email":
                return "E-mail inv??lido";
            case "auth/user-not-found":
                return "E-mail inexistente.";
            case "auth/wrong-password":
                return "Senha incorreta.";       
            default:
                return "Erro desconhecido";
        }
    }

    renderButton() {
        if(this.state.isLoading)
            return <ActivityIndicator size="large" color="white" />
        return(
            <Botao label="Entrar" onPress={()=> {this.processLogin()}}/>
        )
    }

    renderMessage() {
        const {message} = this.state;

        if(!message)
            return null
        return(
            <View style={styles.messageView}>
                <Text style={styles.messageTexto}>{message}</Text>
            </View>
        );
    }

    cleanInput(){
        this.setState({ message: ""});
        this.setState({ email: ""});
        this.setState({ password: ""});
    }

    renderPasswordIcon(){
        if(this.state.visible){
            this.setState({visible: false})    
            this.setState({passwordIcon: 'eye'})
        }else{
            this.setState({visible: true})    
            this.setState({passwordIcon: 'eye-slash'})
        }
    }

    render(){
        return(
            <KeyboardAwareScrollView style={{backgroundColor: '#7E39FB'}}>
                <View style={styles.fundo}>
                    <Image source={require("../../../img/logo.png")} style={styles.imageStyle}/>
                    <Input labelInput="E-mail:" aviso="escreva seu email conforme o exemplo">
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="user@provider.com"
                            value={this.state.email}
                            onChangeText={valor => {this.onChangeHandler('email', valor)}}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />                    
                    </Input>
                    <PasswordInput labelInput="Senha:" passwordIcon={this.state.passwordIcon} visible={this.state.visible} change={this.setState}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Enter your password here"
                            secureTextEntry={this.state.visible}
                            value={this.state.password}
                            onChangeText={valor => {this.onChangeHandler('password', valor)}}
                        />
                        <Icon name={this.state.passwordIcon} size={20} onPress={() => this.renderPasswordIcon()}  color="black" style={styles.iconEye}/>
                    </PasswordInput>
                    {this.renderButton()}
                    {this.renderMessage()}
                    <View style={styles.textView}>
                        <Text style={styles.texto}>N??o possui cadastro?</Text>
                        <Text style={styles.linkStyle} onPress={() => {this.props.navigation.navigate("UserCad"), this.cleanInput()}}>
                            Cadastre-se
                        </Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}
                
const styles = StyleSheet.create({
    textInput:{
        flex:1,
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
    imageStyle:{
        width: 200,
        height:200,
        alignSelf: 'center',
        marginBottom: 20
    },
    texto:{
        fontSize: 14,
        fontWeight: "bold",
        color: 'white',
        paddingLeft: "20%"
    },
    messageTexto:{
        fontSize: 16,
        fontWeight: "bold",
        color: 'red'
    },
    textView:{
        flexDirection: 'row',
        marginTop: 30
    },
    messageView:{
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    linkStyle:{
        color: '#DEB40B',
        fontWeight: 'bold',
        marginLeft: 5
    },
    iconEye:{
        alignSelf:'center',
        position: 'absolute',
        right: 10 
    }
})

export default connect(null, {processLogin})(LoginScreen);