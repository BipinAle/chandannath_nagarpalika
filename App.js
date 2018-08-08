import React, {Component} from 'react';
import {  Text,View ,TouchableOpacity,Alert,ScrollView,FlatList,AsyncStorage,Button,Image} from 'react-native';
import Dashboard from './app/screens/Dashboard'
import { createDrawerNavigator,createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import ElectedOfficials from './app/screens/ElectedOfficials'
import Karmachari from './app/screens/Karmachari'
import Suchana from './app/screens/Suchana'
import BolPatra from './app/screens/BolPatra'
import Bidhutiya from './app/screens/Bidhutiya'
import Nirnayaharu from './app/screens/Nirnayaharu'
import MapView from './app/screens/MapView'
import ContactUs from './app/components/ContactUs'

export default class App extends Component<Props> {
  render() {
    return (
      <DrawerNavigator/>
    );
  }
}
const DrawerButton = (props) => {
	return (
    <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity   onPress={() => {props.navigation.openDrawer()}}>
         <View style={{ paddingLeft:12,paddingRight:12}}>
             <Icon
             size={24}
             name={'bars'}
             />
         </View>
       </TouchableOpacity>
     </View>
  );
};

const DrawerNavigator = createDrawerNavigator({
  Home: {screen: ()=>{ return <StackNavigator/> },
  navigationOptions:{  title:'ड्यासबोर्ड',
                      drawerIcon:
                        <Image
                               style={{width: 32, height: 32,padding:8}}
                               source={require('./app/icons/dashboard.png')}
                             />
                      ,}},
  ElectedOfficials:{screen:ElectedOfficials,navigationOptions:{  title:'जनप्रतिनिधि',

                          drawerIcon:
                            <Image
                                   style={{width: 32, height: 32,padding:8}}
                                   source={require('./app/icons/profile.png')}
                                 />
                          ,}},
  Karmachari:{screen:Karmachari,navigationOptions:{  title:'कर्मचारी',
                      drawerIcon:
                        <Image
                               style={{width: 32, height: 32,padding:8}}
                               source={require('./app/icons/karmachari.png')}
                             />
                      ,}},
  Suchana:{screen:Suchana,navigationOptions:{  title:'सूचना/समाचार ब्लक',
                    drawerIcon:
                      <Image
                             style={{width: 32, height: 32,padding:8}}
                             source={require('./app/icons/news.png')}
                           />
                    ,}},
  BolPatra:{screen:BolPatra,navigationOptions:{  title:'सार्वजनिक खरिद/बोलपत्र सूचना',
                    drawerIcon:
                      <Image
                             style={{width: 32, height: 32,padding:8}}
                             source={require('./app/icons/bolpatra.png')}
                           />
                    ,}},
  Bidhutiya:{screen:Bidhutiya,navigationOptions:{  title:'विधुतीय शुसासन सेवा',
                    drawerIcon:
                      <Image
                             style={{width: 32, height: 32,padding:8}}
                             source={require('./app/icons/budhutiya.png')}
                           />
                    ,}},
  Nirnayaharu:{screen:Nirnayaharu,navigationOptions:{  title:'निर्णयहरु',
                      drawerIcon:
                        <Image
                               style={{width: 32, height: 32,padding:8}}
                               source={require('./app/icons/nirnaya.png')}
                             />
                      ,}},
  MapView:{screen:MapView,navigationOptions:{  title:'नक्सा',
                      drawerIcon:
                        <Image
                               style={{width: 32, height: 32,padding:8}}
                               source={require('./app/icons/map.png')}
                             />
                      ,}},
  ContactUs:{screen:ContactUs,navigationOptions:{  title:'सम्पर्क विवरण',
                      drawerIcon:
                        <Image
                               style={{width: 32, height: 32,padding:8}}
                               source={require('./app/icons/phone.png')}
                             />
                      ,}},

});



const StackNavigator = createStackNavigator({

    Dashboard: {
      screen: Dashboard,
      navigationOptions: ({navigation}) => ({
        title: "चन्दननाथ नगरपालिक",
        headerLeft: <DrawerButton navigation={navigation}  />
      }),
    },
    ElectedOfficials:{screen:ElectedOfficials,navigationOptions:{  title:'जनप्रतिनिधि'}},
    Karmachari:{screen:Karmachari,navigationOptions:{  title:'कर्मचारी'}},
    Suchana:{screen:Suchana,navigationOptions:{  title:'सूचना/समाचार ब्लक'}},
    BolPatra:{screen:BolPatra,navigationOptions:{  title:'सार्वजनिक खरिद/बोलपत्र सूचना'}},
    Bidhutiya:{screen:Bidhutiya,navigationOptions:{  title:'विधुतीय शुसासन सेवा'}},
    Nirnayaharu:{screen:Nirnayaharu,navigationOptions:{  title:'निर्णयहरु'}},
    MapView:{screen:MapView,navigationOptions:{  title:'नक्सा'}}

   },{
     initialRouteName: 'Dashboard',
     navigationOptions: {
       headerStyle: {
       backgroundColor: '#f4511e',
       },
       headerTintColor: '#fff',
       headerTitleStyle: {
         fontWeight: 'bold',
       },


     }
   },

);
