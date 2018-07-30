import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView,Alert,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";

const size = Dimensions.get('window').width/2;

export default class CardWithImageAndTitle extends Component<Props> {
  constructor(props) {
      super(props);
       }
 render() {
   return (
     <Card style={{flex:1,height:size-24,width:size-24}}>
     <TouchableOpacity onPress={() =>this.props.props.navigation.navigate(this.props.navigateTo)}>
       <CardItem bordered >
         <Body  >
         <Image source={this.props.image} style={{height:70,width:70,alignSelf:'center'}}  />
           <Text style={{alignSelf:'center'}}>
            {this.props.title}
           </Text>
         </Body>
       </CardItem>
       </TouchableOpacity>
     </Card>
   )
 }
}
