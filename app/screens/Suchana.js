import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import  {BASE_URL,SUCHANA} from '../utils/config'
import PinchZoomView from 'react-native-pinch-zoom-view';
import Spinner from 'react-native-loading-spinner-overlay';
import HTML from 'react-native-render-html';
import HTMLView from 'react-native-htmlview';

export default class Suchana extends Component<Props> {
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
                <Card style={{padding:12}}>

              {
                item["no name"]==""?this.renderBlankView():<HTMLView
                  value={item["no name"]}
                  onLinkPress={(url) => console.log('clicked link: ', url)}
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
                  item.Image==""?this.renderBlankView():
                      <HTMLView value={item.Image}
                     onLinkPress={(url) => console.log('clicked link: ', url)} />

                  }
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
   renderBlankView=()=>{
     return(<Text />)
   }
 getElectedOfficials = ()=>{
   this.setState({isLoading:true})
    fetch(BASE_URL+SUCHANA, {
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
