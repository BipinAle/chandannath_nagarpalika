import React, {Component} from 'react';
import {Platform, StyleSheet, Text,View,Image} from 'react-native';
export default class IconTextView extends Component<Props> {
  constructor(props) {
      super(props);
       }
 render() {
   return (
     <View style={{flexDirection:'row',marginBottom:8}}>
     <Image  style={{height:24,width:24,marginRight:8 }} source={this.props.image} />
     <Text style={{fontSize:17,fontWeight:'bold'}}>{this.props.text}</Text>
     </View>
   )
 }
}
