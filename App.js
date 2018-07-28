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
    Dashboard: {  screen: Dashboard },
    ElectedOfficials:{screen:ElectedOfficials},
    Karmachari:{screen:Karmachari},
    Suchana:{screen:Suchana},
    BolPatra:{screen:BolPatra},
    Bidhutiya:{screen:Bidhutiya},
    Nirnayaharu:{screen:Nirnayaharu}
   },{
     initialRouteName: 'Dashboard',
     navigationOptions: {
       headerStyle: {
           backgroundColor: '#ff0000',
         },
         headerLeft: (
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
             <Text style={{color:'white',fontSize:20,}}>चन्दननाथ नगरपालिक</Text>
           </View>
        ),
          
     }
   },

);
