import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView,Alert,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import Line from '../components/line'
import CardWithImageAndTitle from '../components/CardWithImageAndTitle'

 export default class Dashboard extends Component<Props> {
  render() {
    return (
      <ScrollView style={{padding:12,backgroundColor:'white',}}>
        <View style={{flexDirection:'row',alignItems:'center',}}>
          <Image style={{ height:40,width:40,margin:12}} source={require('../../app/icons/govt_nepal.png')}  />
          <Text>चन्दननाथ नगरपालिका </Text>
        </View>
        <Line/>
        <Text style={{color:'red',fontSize:20,marginTop:12,marginBottom:12}}>तपाईं कुन जानकारी चाहनुहुन्छ ? </Text>
        <View style={{flexDirection:'row'}}>
        <CardWithImageAndTitle props={this.props} navigateTo={'ElectedOfficials'} title={'जनप्रतिनिधि'}  image={require('../../app/icons/profile.png')}/>
        <CardWithImageAndTitle props={this.props} navigateTo={'Karmachari'} title={'कर्मचारी'}  image={require('../../app/icons/karmachari.png')}/>
        </View>
        <View style={{flexDirection:'row'}}>
        <CardWithImageAndTitle props={this.props} navigateTo={'Suchana'} title={'सूचना\/समाचार ब्लक'}  image={require('../../app/icons/news.png')}/>
        <CardWithImageAndTitle props={this.props} navigateTo={'BolPatra'} title={'सार्वजनिक खरिद\/बोलपत्र सूचना'}  image={require('../../app/icons/bolpatra.png')}/>
        </View>
        <View style={{flexDirection:'row',marginBottom:48}}>
        <CardWithImageAndTitle props={this.props} navigateTo={'Bidhutiya'} title={' विधुतीय शुसासन\सेवा'}  image={require('../../app/icons/budhutiya.png')}/>
        <CardWithImageAndTitle props={this.props} navigateTo={'Nirnayaharu'} title={'निर्णयहरु'}  image={require('../../app/icons/nirnaya.png')}/>
        </View>
      </ScrollView>
    );
  }
}
