import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import  {BASE_URL,BOLPATRA} from '../utils/config'
import Spinner from 'react-native-loading-spinner-overlay';
import HTMLView from 'react-native-htmlview';
import PinchZoomView from 'react-native-pinch-zoom-view';
export default class Bolpatra extends Component<Props> {
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
              <View>
              {
                item["no name"]==""?this.renderBlankView():<HTMLView
                  value={item["no name"]}
                  onLinkPress={(url) => console.log('clicked link: ', url)}
                />
              }
              {
                item.Body==""?this.renderBlankView():<HTMLView
                    value={item.Body}
                    onLinkPress={(url) => console.log('clicked link: ', url)}
                  />
                }
                {
                  item.Documents==""?this.renderBlankView(): <PinchZoomView >
                      <HTMLView value={item.Documents}
                     onLinkPress={(url) => console.log('clicked link: ', url)} />
                    </PinchZoomView>
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
    fetch(BASE_URL+BOLPATRA, {
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
