import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView,Linking} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Button ,Thumbnail} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import  {BASE_URL,BIDHUTIYA_SUSHASHAN} from '../utils/config'
import Spinner from 'react-native-loading-spinner-overlay';
import HTMLView from 'react-native-htmlview';
import PinchZoomView from 'react-native-pinch-zoom-view';


export default class Bidhutiya extends Component<Props> {
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
                <Card style={{padding:12,alignItems:'center',margin:12}}>

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
                  item.Documents==""?this.renderBlankPdf():
                  <View style={{flexDirection:'row'}}>
                        <Thumbnail style={{height:48,width:48}} source={require('../../app/icons/pdf.png')} />
                       <HTMLView
                       style={{alignSelf:'center'}}
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
                    </View>
                  }
                </Card>
            )} }
           keyExtractor={(item, index) => index.toString()}
             />
           <Spinner visible={this.state.isLoading}  />
   </View>
   )
 }

 renderBlankPdf=()=>{
     return(   <View style={{flexDirection:'row'}}>

           <Thumbnail style={{marginRight:12,height:48,width:48}}source={require('../../app/icons/disabled_pdf.png')} />
            <Text style={{alignSelf:'center'}}>No pdf available.</Text>

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
    fetch(BASE_URL+BIDHUTIYA_SUSHASHAN, {
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
