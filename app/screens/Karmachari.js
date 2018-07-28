import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import  {BASE_URL,KARMACHARI} from '../utils/config'
import Spinner from 'react-native-loading-spinner-overlay';
import HTMLView from 'react-native-htmlview';

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
     <View style={{flex:1}}>
        <FlatList
           data={this.state.data}
            renderItem={({item}) =>{return (
              <View>
              {
                item.Photo==""?this.renderBlankView():<HTMLView
                    value={item.Photo}
                    onLinkPress={(url) => console.log('clicked link: ', url)}
                  />
                }
              {
                item["no name"]==""?this.renderBlankView():<HTMLView
                  value={item["no name"]}
                  onLinkPress={(url) => console.log('clicked link: ', url)}
                />
              }
              {
                item.Designation==""?this.renderBlankView():<HTMLView
                    value={item.Designation}
                    onLinkPress={(url) => console.log('clicked link: ', url)}
                  />
                }

                  {
                    item.Email==""?this.renderBlankView():<HTMLView
                        value={item.Email}
                        onLinkPress={(url) => console.log('clicked link: ', url)}
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
 componentDidMount() {
    this.getElectedOfficials()
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
