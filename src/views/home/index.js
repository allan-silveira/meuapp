import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import HeaderDrawNav from '../../components/headerDrawNav';
import CardCat from '../../components/cardCat';
import BotaoAdd from '../../components/botaoAdd';

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.fundo}>
                <HeaderDrawNav title='Home' navigation={this.props.navigation}/>
                <ScrollView>
                    <CardCat catNome={"Pet Shop"} catDesc={"Aquele perto do mercado são bendo na rua Maria Joaquina"} catItemNum={"1"} onPress={() => {this.props.navigation.navigate("Item")}} navigation={this.props.navigation}/> 
                    <CardCat catNome={"Pet Shop"} catDesc={"Aquele perto do mercado são bendo na rua Maria Joaquina"} catItemNum={"1"} onPress={() => {this.props.navigation.navigate("Item")}} navigation={this.props.navigation}/> 
                    <CardCat catNome={"Pet Shop"} catDesc={"Aquele perto do mercado são bendo na rua Maria Joaquina"} catItemNum={"1"} onPress={() => {this.props.navigation.navigate("Item")}} navigation={this.props.navigation}/> 
                    <CardCat catNome={"Pet Shop"} catDesc={"Aquele perto do mercado são bendo na rua Maria Joaquina"} catItemNum={"1"} onPress={() => {this.props.navigation.navigate("Item")}} navigation={this.props.navigation}/> 
                    <View style={{height: 110}}></View>
                </ScrollView>
                <View style={styles.styleBotao}>
                    <BotaoAdd onPress={() => {this.props.navigation.navigate("CatCad")}} />
                </View>       
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fundo:{
        height: '100%',
        backgroundColor: '#7E39FB',
    },
    styleBotao:{
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        flexDirection:'column',
        height:110,
        alignItems:'center',
    }
})