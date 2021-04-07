import * as React from 'react';
import {View, TextInput, StyleSheet, ActivityIndicator, Alert, TouchableOpacity, Text, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import { RNCamera } from 'react-native-camera';
import ImgToBase64 from 'react-native-image-base64';


import HeaderDrawNavOther from '../../components/headerDrawNavOther';
import Input from '../../components/input';
import Botao from '../../components/botao';
import BotaoAddImg from '../../components/botaoAddImg';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import { connect } from 'react-redux';
import { itemsetField, saveItem, itemresetForm, itemsetAllFields } from '../../actions'

class ItemCad extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            pageTitle: "",
            isCamera: false
        }
    }

    componentDidMount(){
        const {route, itemsetAllFields, itemresetForm} = this.props;
        const { params } = route;

        if(params && params.itemToEdit){
            itemsetAllFields(params.itemToEdit)
            this.setState({pageTitle: params.itemToEdit.title})
        }else{
            this.setState({pageTitle: 'Novo Item'})
            itemresetForm();
        }
    }
    

    onChangeHandler(field, valor){
        this.setState({
            [field]: valor
        })
    }

    renderButton(itemForm, saveItem) {
        const {route, itemsetAllFields, itemresetForm} = this.props;
        const { params } = route;
        if(this.state.isLoading){
            return <ActivityIndicator size="large" color="white"/>
        }
        return(
            <View style={styles.styleBotao}>
                <Botao label={"Salvar"} onPress={ async ()=> {
                    if(itemForm.title === ""){
                        return Alert.alert(
                            'Alerta',
                            'Nome não pode ser nulo!!',
                            [{
                                text: 'OK',
                                onPress: () =>{
                                }
                            }]
                        )
                    }
                    this.setState({isLoading: true})
                    try{
                        console.log(params.categoria)
                        await saveItem(params.categoria, itemForm);
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

    viewCamera(){
        return(
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'Nós precisamos de sua permissão para usar a câmera',
                        buttonPositive: 'Aceito',
                        buttonNegative: 'Cancelar'
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to record audio',
                        message: 'Nós precisamos de sua permissão para gravar audio',
                        buttonPositive: 'Aceito',
                        buttonNegative: 'Cancelar'
                    }}
                />
                <View>
                    <TouchableOpacity 
                       style={styles.capture}
                       onPress={this.takePicture.bind(this)}>
                        <Text>Tirar foto!</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

    takePicture = async () =>{
        if(this.camera){
            const options = {quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true};
            const data = await this.camera.takePictureAsync(options);

            if(data){
                this.props.itemsetField('img', data.base64);
                this.setState({
                    isCamera: false,
                })
            }
        }
    }

    viewForm(){
        const {itemForm, itemsetField, saveItem, navigation} = this.props;
        return(
            <KeyboardAwareScrollView style={{backgroundColor: '#7E39FB'}}>
                <View style={styles.fundo}>
                    <HeaderDrawNavOther title={this.state.pageTitle} navigation={this.props.navigation}/>
                    <Input labelInput="Nome:">
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Entre com o nome do item aqui"
                            value={itemForm.title}
                            onChangeText={valor => itemsetField('title', valor)}
                        />                    
                    </Input>
                    <Input labelInput="Descrição:">
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Entre com a descrição do item aqui"
                            value={itemForm.description}
                            onChangeText={valor => itemsetField('description', valor)}
                        />
                    </Input>
                    {
                        itemForm.img?
                        <Image 
                            source={{uri: `data:image/jpeg;base64,${itemForm.img}`}} 
                            style={styles.img}
                        />
                        :null
                    }
                    <BotaoAddImg onPress={() =>{this.setState({isCamera: true})}}/>
                    {this.renderButton(itemForm, saveItem)}
                </View>
            </KeyboardAwareScrollView>
        )
    }

    render(){
        if(this.state.isCamera){
            return(this.viewCamera());
        }

        return(this.viewForm()) 
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
        marginTop: 5,
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        flexDirection:'column',
        height:110,
        alignItems:'center',
    },
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture:{
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },
    img:{
        aspectRatio: 1,
        width: '60%',
        alignSelf: 'center',
        borderRadius: 5
    }
})

const mapStateToProps = (state) => {
    return ({
        itemForm: state.itemForm
    })
}

const mapDispatchToProps = {
    itemsetField,
    saveItem,
    itemresetForm,
    itemsetAllFields
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCad);