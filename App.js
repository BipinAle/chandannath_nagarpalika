import React, {Component} from 'react';
import {  Text,View ,TouchableOpacity,Alert,ScrollView,FlatList,AsyncStorage,} from 'react-native';
import Dashboard from './app/screens/Dashboard'
import { createDrawerNavigator,createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import ElectedOfficials from './app/screens/ElectedOfficials'
import Karmachari from './app/screens/Karmachari'
import Suchana from './app/screens/Suchana'
import BolPatra from './app/screens/BolPatra'
import Bidhutiya from './app/screens/Bidhutiya'
import Nirnayaharu from './app/screens/Nirnayaharu'

export default class App extends Component<Props> {
  render() {
    return (
      <StackNavigator/>
    );
  }
}

const StackNavigator = createStackNavigator({
    Dashboard: {  screen: Dashboard,navigationOptions:{  title:'चन्दननाथ नगरपालिक', headerLeft: (
       <View style={{flex: 1, flexDirection: 'row'}}>
           <TouchableOpacity   >
            <View style={{ paddingLeft:12,paddingRight:12}}>
                <Icon
                color={'white'}
                size={24}
                name={'bars'}
                />
            </View>
          </TouchableOpacity>
        </View>
    ),}},
    ElectedOfficials:{screen:ElectedOfficials,navigationOptions:{  title:'जनप्रतिनिधि'}},
    Karmachari:{screen:Karmachari,navigationOptions:{  title:'कर्मचारी'}},
    Suchana:{screen:Suchana,navigationOptions:{  title:'सूचना/समाचार ब्लक'}},
    BolPatra:{screen:BolPatra,navigationOptions:{  title:'सार्वजनिक खरिद/बोलपत्र सूचना'}},
    Bidhutiya:{screen:Bidhutiya,navigationOptions:{  title:'विधुतीय शुसासन सेवा'}},
    Nirnayaharu:{screen:Nirnayaharu,navigationOptions:{  title:'निर्णयहरु'}}
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
