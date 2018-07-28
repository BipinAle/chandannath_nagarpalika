import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView,Alert,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import Line from '../components/line'

 export default class Dashboard extends Component<Props> {
  render() {
    return (
      <ScrollView style={{padding:12,backgroundColor:'white'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={{ height:40,width:40,margin:12}} source={require('../../app/icons/govt_nepal.png')}  />
          <Text>चन्दननाथ नगरपालिका </Text>
        </View>
        <Line/>
        <Text style={{color:'red',fontSize:20,marginTop:12,marginBottom:12}}>तपाईं कुन जानकारी चाहनुहुन्छ ? </Text>
        <View style={{flexDirection:'row'}}>
          <Card style={{flex:1}}>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate('ElectedOfficials')}>
            <CardItem bordered  >
              <Body >
              <Image source={require('../../app/icons/profile.png')}  />
                <Text>
                   जनप्रतिनिधि
                </Text>
              </Body>
            </CardItem>
            </TouchableOpacity>
          </Card>
          <Card style={{flex:1}}>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate('Karmachari')}>
            <CardItem bordered >
              <Body>
              <Image source={require('../../app/icons/profile.png')} />
                <Text>
                   कर्मचारी
                </Text>
              </Body>
            </CardItem>
            </TouchableOpacity>
          </Card>

        </View>
        <View style={{flexDirection:'row'}}>
          <Card style={{flex:1}}>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate('Suchana')}>
            <CardItem bordered>
              <Body>
              <Image source={require('../../app/icons/profile.png')} />
                <Text>
                  सूचना/समाचार ब्लक
                </Text>
              </Body>
            </CardItem>
            </TouchableOpacity>
          </Card>
          <Card style={{flex:1}}>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate('BolPatra')}>
            <CardItem bordered>
              <Body>
              <Image source={require('../../app/icons/profile.png')} />
                <Text>
                   सार्वजनिक खरिद/बोलपत्र सूचना
                </Text>
              </Body>
            </CardItem>
            </TouchableOpacity>
          </Card>

        </View>
        <View style={{flexDirection:'row'}}>
          <Card style={{flex:1}}>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate('Bidhutiya')}>
            <CardItem bordered>
              <Body>
              <Image source={require('../../app/icons/profile.png')} />
                <Text>
                   विधुतीय शुसासन सेवा
                </Text>
              </Body>
            </CardItem>
            </TouchableOpacity>
          </Card>
          <Card style={{flex:1}}>
          <TouchableOpacity onPress={() =>this.props.navigation.navigate('Nirnayaharu')}>
            <CardItem bordered>
              <Body>
              <Image source={require('../../app/icons/profile.png')} />
                <Text>
                  निर्णयहरु
                </Text>
              </Body>
            </CardItem>
            </TouchableOpacity>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
