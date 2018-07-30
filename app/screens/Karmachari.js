import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import  {BASE_URL,KARMACHARI} from '../utils/config'
import Spinner from 'react-native-loading-spinner-overlay';
import HTMLView from 'react-native-htmlview';
const size = Dimensions.get('window').width;
export default class Karmachari extends Component<Props> {
  constructor(props) {
      super(props);
     this.state = {
        isLoading:false,
        data:[],

      }

    }
 render() {
   return (
<<<<<<< HEAD
=======
     <View style={{flex:1}}>
        <FlatList
           data={this.state.data}
            renderItem={({item}) =>{return (
              <Card style={{padding:14,alignItems:'center'}}>
>>>>>>> e17e9d043d38ffa538cd670e55ceb1b7f8dccb52

       <View style={{flex:1,}}>
          <FlatList
             data={this.state.data}
              renderItem={({item}) =>{return (

                <View style={{padding:14,alignItems:'center',flexDirection:'row'}}>

                {
                  item.Photo==""?this.renderBlankPhoto():<HTMLView
                       value={item.Photo}
                      onLinkPress={(url) =>{ Linking.canOpenURL(url).then(supported => {
                          if (!supported) {
                            console.log('Can\'t handle url: ' + url);
                          } else {
                            return Linking.openURL(url);
                          }
                        }).catch(err => console.error('An error occurred', err));}
                      }
                    />
                  }
                  <View >
                  <View style={{flexDirection:'row',alignSelf:'flex-start',marginLeft:6}}>
                <Text >नाम : </Text>
                {
                  item["no name"]==""?this.renderBlankView():<HTMLView
                    value={item["no name"]}
                    onLinkPress={(url) =>{ Linking.canOpenURL(url).then(supported => {
                        if (!supported) {
                          console.log('Can\'t handle url: ' + url);
                        } else {
                          return Linking.openURL(url);
                        }
                      }).catch(err => console.error('An error occurred', err));}
                    }
                  />
                }
                </View>
                <View style={{flexDirection:'row',alignSelf:'flex-start',marginLeft:6}}>
                <Text>पद  : </Text>
                {
                  item.Designation==""?this.renderBlankView():<HTMLView
                      value={item.Designation}
                      onLinkPress={(url) =>{ Linking.canOpenURL(url).then(supported => {
                          if (!supported) {
                            console.log('Can\'t handle url: ' + url);
                          } else {
                            return Linking.openURL(url);
                          }
                        }).catch(err => console.error('An error occurred', err));}
                      }
                    />
                  }
<<<<<<< HEAD
                  </View>
                  <View style={{flexDirection:'row',alignSelf:'flex-start',marginLeft:6}}>
                  <Text>ईमेल  : </Text>
                  {
                    item.Email==""?this.renderBlankView():<HTMLView
                        value={item.Email}
                        onLinkPress={(url) =>{ Linking.canOpenURL(url).then(supported => {
                            if (!supported) {
                              console.log('Can\'t handle url: ' + url);
                            } else {
                              return Linking.openURL(url);
                            }
                          }).catch(err => console.error('An error occurred', err));}
                        }
                      />
                    }
                    </View>
                  </View>

                  </View>

              )} }
             keyExtractor={(item, index) => index.toString()}
               />
             <Spinner visible={this.state.isLoading}  />
     </View>
=======
                </View>
               </Card>
            )} }
           keyExtractor={(item, index) => index.toString()}
             />
           <Spinner visible={this.state.isLoading}  />
   </View>
>>>>>>> e17e9d043d38ffa538cd670e55ceb1b7f8dccb52
   )
 }
 componentDidMount() {
    this.getElectedOfficials()
   }
   renderBlankPhoto=()=>{
     return(<Image style ={{height:100,width:100}}source={require('../../app/icons/user.png')}/>)
   }
   renderBlankView=()=>{
     return(<Text />)
   }
 getElectedOfficials = ()=>{
   this.setState({isLoading:true})
    fetch(BASE_URL+KARMACHARI, {
            method: 'GET',
          })
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({isLoading:false})
          this.setState({data:responseJson})

      })
      .catch((error) => {
        this.setState({isLoading:false})
          console.error(error);
       })
     }
 }
