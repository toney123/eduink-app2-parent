/**
 * 更多页
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TopNavBar from '../common/global/top-nav-bar';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    containerTop:{
        flex:1,
    },
    containerBottom:{
        flex:12,
    },
    topNavBarCenterText:{
        textAlign:'center',
        fontSize:18
    }
});


export default class MorePage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <TopNavBar 
                        topNavBarCenter={
                            <Text style={styles.topNavBarCenterText}>More</Text>
                        }
                    />
                </View>
                <View style={styles.containerBottom}>

                </View>
            </View>
        );
    }
}
