import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Image,ScrollView,Dimensions} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import  {BASE_URL,ELECTED_OFFICIALS} from '../utils/config'
import Spinner from 'react-native-loading-spinner-overlay';
import HTMLView from 'react-native-htmlview';
const size = Dimensions.get('window').width;

export default class ElectedOfficials extends Component<Props> {
  constructor(props) {
      super(props);
     this.state = {
        isLoading:false,
        data:[],

      }

    }
 render() {
   return (
     <View style={{flex:1}}>
        <FlatList
           data={this.state.data}
            renderItem={({item}) =>{return (
              <Card style={{padding:14,alignItems:'center'}}>

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
                <View style={{flexDirection:'row',alignSelf:'flex-start',marginLeft:size/4,marginTop:12}}>
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
              <View style={{flexDirection:'row',alignSelf:'flex-start',marginLeft:size/4}}>
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
                </View>
                <View style={{flexDirection:'row',alignSelf:'flex-start',marginLeft:size/4}}>
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
               </Card>
            )} }
           keyExtractor={(item, index) => index.toString()}
             />
           <Spinner visible={this.state.isLoading}  />
   </View>
   )
   }
   componentDidMount() {
    this.getElectedOfficials()
   }
   renderBlankPhoto=()=>{
     return(<Image style ={{height:200,width:200}}source={require('../../app/icons/user.png')}/>)
   }
   renderBlankView=()=>{
     return(<Text />)
   }

 getElectedOfficials = ()=>{
   this.setState({isLoading:true})
    fetch(BASE_URL+ELECTED_OFFICIALS, {
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
