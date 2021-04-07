import * as React from 'react';
import {View, ScrollView, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import CardItem from '../../components/cardItem';
import HeaderDrawNavOther from '../../components/headerDrawNavOther';
import BotaoAdd from '../../components/botaoAdd';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

import { connect } from 'react-redux';
import { watchItem, deleteItem } from '../../actions';

class Item extends React.Component{

    componentDidMount(){
        this.props.watchItem(this.props.route.params.categoria);
    }


    render(){
                
        return(
            <View style={styles.fundo}>
                <HeaderDrawNavOther title={this.props.route.params.categoria.title} navigation={this.props.navigation}/>
                <FlatList 
                    data={this.props.itens}
                    renderItem={({item}) => {
                        return( 
                            item.nulo ?
                                <View style={{paddingBottom: '30%'}}></View>
                            :
                            <CardItem 
                            itemNome={item.title}
                            itemDesc={item.description}
                            itemImg={ `data:image/jpeg;base64,${item.img}`}
                            navigation = {() => { this.props.navigation.navigate('ItemCad', {itemToEdit: item, categoria: this.props.route.params.categoria})}}
                            deleteItem = {async ()=> {
                                const hasDeleted = await this.props.deleteItem(this.props.route.params.categoria, item)
                            }}
                            />
                        );
                    }}
                    keyExtractor={item => item.id}
                    numColumns={1}
                /> 
                <View style={styles.styleBotao}>
                    <BotaoAdd onPress={() => {this.props.navigation.navigate("ItemCad", {categoria: this.props.route.params.categoria})}}/>
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
        bottom: -20,
        flexDirection:'column',
        height:110,
        alignItems:'center',
    }
})

const mapStateToProps = state => {
    const {listaItem} = state;

    if(listaItem === null) {
        return {itens: listaItem};
    }

    const keys = Object.keys(listaItem);
    const listaItemWithId = keys.map(key => {
        return { ...listaItem[key], id: key }
    })
    return {itens : listaItemWithId};
}

export default connect(mapStateToProps, {watchItem, deleteItem})(Item);