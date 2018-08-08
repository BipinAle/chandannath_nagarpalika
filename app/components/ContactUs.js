import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView,Alert,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import Line from './line'
import Communications from 'react-native-communications';
import CardWithImageAndTitle from './CardWithImageAndTitle'
import IconTextView from './IconTextView'
const size = Dimensions.get('window').width/2;

 export default class ContactUs extends Component<Props> {

  render() {
    return (

        <Card style={{marginBottom:32}}>

             <CardItem bordered style={{flexDirection:'column',alignItems:'flex-start'}} >
              <Text style={{fontSize:22,fontWeight:'bold',textDecorationLine:'underline'}}>सम्पर्क विवरण </Text>
              <Line/>
              <Text style={{fontSize:18,marginBottom:8}}>

               </Text>
               <TouchableOpacity onPress={() => Communications.phonecall('+९७७ ८७ ५२००११', true)}   >
              <IconTextView text={'+९७७ ८७ ५२००११'}  image={require('../../app/icons/phone.png')}/>
              </TouchableOpacity>
              <IconTextView text={'+९७७ ८७ ५२००११'}  image={require('../../app/icons/fax.png')}/>
              <TouchableOpacity onPress={() => Communications.email(['cmjumla@gmail.com'], null, null, null, null)}   >
              <IconTextView text={'cmjumla@gmail.com'}  image={require('../../app/icons/email.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Communications.web('http://chandannathmun.gov.np/ne')}   >
              <IconTextView text={'http://chandannathmun.gov.np/ne'}  image={require('../../app/icons/site.png')}/>
              </TouchableOpacity>
              <IconTextView text={'  चन्दननाथ नगरपालिक\n  नगर कार्यपालिकाको कार्यालय \n  जुम्ला,कर्णाली प्रदेश \n नेपाल'}  image={require('../../app/icons/location.png')}/>
              <IconTextView text={'आइतबार - बिहिबार्(बिहान १०:०० बजे देखी सांझ ५:०० बजे), शुक्रबार (बिहान १०:०० बजे देखी सांझ ३:०० बजे) '}  image={require('../../app/icons/time.png')}/>
             </CardItem>

        </Card>
     );
  }
}
