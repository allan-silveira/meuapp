import * as React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import CardItem from '../../components/cardItem';
import HeaderDrawNavOther from '../../components/headerDrawNavOther';
import BotaoAdd from '../../components/botaoAdd';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default class Item extends React.Component{
    render(){
        return(
            <View style={styles.fundo}>
                <HeaderDrawNavOther title='Item' navigation={this.props.navigation}/>
                <ScrollView>
                    <CardItem itemNome={"Ração premier"} itemDesc={"Ração adulto, sabor frango"} itemImg={"../../../img/racao.jpg"} navigation={this.props.navigation}/>
                    <CardItem itemNome={"Ração premier"} itemDesc={"Ração adulto, sabor frango"} itemImg={"../../../img/racao.jpg"} navigation={this.props.navigation}/>
                    <CardItem itemNome={"Ração premier"} itemDesc={"Ração adulto, sabor frango"} itemImg={"../../../img/racao.jpg"} navigation={this.props.navigation}/>
                    <CardItem itemNome={"Ração premier"} itemDesc={"Ração adulto, sabor frango"} itemImg={"../../../img/racao.jpg"} navigation={this.props.navigation}/>
                    <View style={{height: 110}}></View>
                </ScrollView>
                <View style={styles.styleBotao}>
                    <BotaoAdd onPress={() => {this.props.navigation.navigate("ItemCad")}}/>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    fundo:{
        height: '100%',
        backgroundColor: '#7E39FB'
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