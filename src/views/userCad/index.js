import * as React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import firebase from 'firebase';

import Input from '../../components/input';
import PasswordInput from '../../components/passwordInput';
import Botao from '../../components/botao';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();


export default class userCad extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            senha: "",
            senha2:"",
            isLoading: false,
            message: "",
            label: "",
            passwordIcon1: "eye-slash",
            visible1: true,
            passwordIcon2: "eye-slash",
            visible2: true,
        }
    }

    onChangeHandler(field, valor){
        this.setState({
            [field]: valor
        })
    }

    processCad(){
        this.setState({ isLoading: true});
        
        const {email, senha, senha2} = this.state;
        
        const CadUserSuccess = user => {
            this.setState({ message: "Sucesso!"});
            {this.cleanInput()};            
            this.props.navigation.navigate("Login");
        }

        const CadUserFailed = error => {
            this.setState({ message: this.getMessageByError(error.code)});
        }

        if(senha == senha2){
            firebase
             .auth()
             .createUserWithEmailAndPassword(email, senha)
             .then(CadUserSuccess)
             .catch(CadUserFailed)
             .then(() => {
                this.setState({ isLoading: false});
            })
        }else{
            this.setState({ message: "Senhas não correspondem!"});
            this.setState({ isLoading: false});
        }
    
    }

    getMessageByError(code){
        switch(code) {
            case "auth/invalid-email":
                return "E-mail inválido";
            case "auth/wrong-password":
                return "Senha incorreta.";
            case "auth/email-already-exists":
                return "O e-mail já está em uso.";
            case "auth/email-already-in-use":
                return "O e-mail já está em uso.";
            case "auth/invalid-password":
                return "Senha deve ter no mínimo 7 caracteres";
            case "auth/weak-password":
                return "Senha deve ter no mínimo 7 caracteres";         
            default:
                return "Erro desconhecido";
        }
    }

    renderButton() {
        if(this.state.isLoading)
            return <ActivityIndicator size="large" color="white" />
        return(
            <Botao label="Cadastrar" onPress={()=> {this.processCad()}}/>
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

    renderPasswordIcon(num){
        
        switch(num){
            case(1):
                if(this.state.visible1){
                    this.setState({visible1: false});   
                    this.setState({passwordIcon1: 'eye'});
                }else{
                    this.setState({visible1: true});   
                    this.setState({passwordIcon1: 'eye-slash'});
                }
                break;
            case(2):
                if(this.state.visible2){
                    this.setState({visible2: false});    
                    this.setState({passwordIcon2: 'eye'});
                }else{
                    this.setState({visible2: true});    
                    this.setState({passwordIcon2: 'eye-slash'});
                }
                break;
        }
    
    }

    cleanInput(){
        this.setState({ message: ""});
        this.setState({ email: ""});
        this.setState({ senha: ""});
        this.setState({ senha2: ""});
    }

    render(){
        return(
            <KeyboardAwareScrollView style={{backgroundColor: '#7E39FB'}}>
                <View style={styles.fundo}>           
                    <TouchableOpacity>
                        <Icon name="arrow-left" size={25} style={styles.iconStyle} color="black" onPress={()=> {this.props.navigation.pop(), this.cleanInput()}}/>
                    </TouchableOpacity>
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
                    <PasswordInput labelInput="Senha:">
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Entre com sua senha aqui"
                            secureTextEntry={this.state.visible1}
                            value={this.state.senha}
                            onChangeText={valor => {this.onChangeHandler('senha', valor)}}
                        />  
                        <Icon name={this.state.passwordIcon1} size={20} onPress={() => this.renderPasswordIcon(1)}  color="black" style={styles.iconEye}/>                  
                    </PasswordInput>
                    <PasswordInput labelInput="Confirme a senha:">
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Digite novamente sua senha para confirmar"
                            secureTextEntry={this.state.visible2}
                            value={this.state.senha2}
                            onChangeText={valor => {this.onChangeHandler('senha2', valor)}}
                        />
                        <Icon name={this.state.passwordIcon2} size={20} onPress={() => this.renderPasswordIcon(2)}  color="black" style={styles.iconEye}/>
                    </PasswordInput>       
                    {this.renderButton()}
                    {this.renderMessage()}
                </View>
            </KeyboardAwareScrollView>
        )
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
    iconStyle:{
        marginLeft: 10,
        marginTop: 10,
        marginBottom:20
    },
    messageView:{
        flexDirection: 'row',
        marginTop: 12,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageTexto:{
        fontSize: 16,
        fontWeight: "bold",
        color: 'red',
    },
    iconEye:{
        alignSelf:'center',
        position: 'absolute',
        right: 10
    }
})