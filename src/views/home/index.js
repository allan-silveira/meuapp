import * as React from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';

import HeaderDrawNav from '../../components/headerDrawNav';
import CardCat from '../../components/cardCat';
import BotaoAdd from '../../components/botaoAdd';

import { connect } from 'react-redux';
import { watchCat, deleteCat } from '../../actions';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numItens: 0
        }
    }

    componentDidMount(){
        this.props.watchCat();
    }

    render(){
        
        return(
            <View style={styles.fundo}>
                <HeaderDrawNav title='Home' navigation={this.props.navigation}/>
                <FlatList 
                    data={this.props.categorias}
                    renderItem={({item}) => {
                        return(
                            item.nulo ?
                                <View style={{paddingBottom: '30%'}}></View>
                            :
                            <CardCat 
                            catNome={item.title}
                            catDesc={item.description}
                            catItemNum={
                                item.itens ?
                                Object.keys(item.itens).length 
                                :
                                0 
                            }
                            onPress={() => this.props.navigation.navigate('Item', {categoria: item})}
                            editNavigation = {() => { this.props.navigation.navigate('CatCad', {catToEdit: item})}}
                            deleteCat = {async ()=> {
                                const hasDeleted = await this.props.deleteCat(item)
                            }}
                            />
                        );
                    }}
                    keyExtractor={item => item.id}
                    numColumns={1}
                /> 
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
        bottom: -20,
        flexDirection:'column',
        height:110,
        alignItems:'center'
    }
})

const mapStateToProps = state => {
    const {listaCat} = state;

    if(listaCat === null) {
        return {categorias: listaCat};
    }

    const keys = Object.keys(listaCat);
    
    const listaCatWithId = keys.map(key => {
        return { ...listaCat[key], id: key }
    })
    return {categorias : listaCatWithId};
}

export default connect(mapStateToProps, {watchCat, deleteCat})(Home);