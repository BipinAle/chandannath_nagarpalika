import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import  {BASE_URL,NIRNYAHARU} from '../utils/config'
import Spinner from 'react-native-loading-spinner-overlay';
import HTMLView from 'react-native-htmlview';
import PinchZoomView from 'react-native-pinch-zoom-view';

export default class Nirnayaharu extends Component<Props> {
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
                <View style={{padding:12}}>
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
              {
                item.Body==""?this.renderBlankView():<HTMLView
                    value={item.Body}
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
                {

                  item.Documents==""?this.renderBlankView():<HTMLView
                      value={item.Documents}
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
            )} }
           keyExtractor={(item, index) => index.toString()}
             />
           <Spinner visible={this.state.isLoading}  />
   </View>
   )
 }
 renderBlankView=()=>{
   return(<Text />)
 }
 componentDidMount() {
    this.getElectedOfficials()
   }
 getElectedOfficials = ()=>{
   this.setState({isLoading:true})
    fetch(BASE_URL+NIRNYAHARU, {
            method: 'GET',
          })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson==null) {
            alert.alert("No data available.")
          }
          this.setState({isLoading:false})
          this.setState({data:responseJson})

      })
      .catch((error) => {
        this.setState({isLoading:false})
          Alert.alert("Something went wrong. ")
       })
     }
 }
