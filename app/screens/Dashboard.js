import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView,Alert,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import Line from '../components/line'
import CardWithImageAndTitle from '../components/CardWithImageAndTitle'
import IconTextView from '../components/IconTextView'
const size = Dimensions.get('window').width/2;

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
        <CardWithImageAndTitle props={this.props} navigateTo={'BolPatra'} title={'बोलपत्र सूचना'}  image={require('../../app/icons/bolpatra.png')}/>
        </View>
        <View style={{flexDirection:'row'}}>
        <CardWithImageAndTitle props={this.props} navigateTo={'Bidhutiya'} title={' विधुतीय शुसासन\सेवा'}  image={require('../../app/icons/budhutiya.png')}/>
        <CardWithImageAndTitle props={this.props} navigateTo={'Nirnayaharu'} title={'निर्णयहरु'}  image={require('../../app/icons/nirnaya.png')}/>
        </View>
        <Card>

             <CardItem bordered style={{flexDirection:'column',alignItems:'flex-start'}} >
              <Text style={{fontSize:22,fontWeight:'bold',textDecorationLine:'underline'}}>सम्पर्क विवरण </Text>
              <Line/>
              <Text style={{fontSize:18,marginBottom:8}}>

               </Text>
              <IconTextView text={'+९७७ ८७ ५२००११'}  image={require('../../app/icons/phone.png')}/>
              <IconTextView text={'+९७७ ८७ ५२००११'}  image={require('../../app/icons/fax.png')}/>
              <IconTextView text={'cmjumla@gmail.com'}  image={require('../../app/icons/email.png')}/>
              <IconTextView text={'http://chandannathmun.gov.np/ne'}  image={require('../../app/icons/site.png')}/>
              <IconTextView text={'  चन्दननाथ नगरपालिक\n  नगर कार्यपालिकाको कार्यालय \n  जुम्ला,कर्णाली प्रदेश \n नेपाल'}  image={require('../../app/icons/location.png')}/>
              <IconTextView text={'आइतबार - बिहिबार्(बिहान १०:०० बजे देखी सांझ ५:०० बजे), शुक्रबार (बिहान १०:०० बजे देखी सांझ ३:०० बजे) '}  image={require('../../app/icons/time.png')}/>
             </CardItem>

        </Card>
      </ScrollView>
    );
  }
}
