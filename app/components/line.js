import React, {Component} from 'react';
import {Platform, StyleSheet, Text,View} from 'react-native';
export default class line extends Component<Props> {
 render() {
   return (
     <View
         style={{
           flex:1,
           borderBottomColor: '#cccccc',
           borderBottomWidth: 1,
         }}
       />
   )
 }
}
