import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import MapView from 'react-native-maps';

export default class Nirnayaharu extends Component<Props> {
     render() {
        return (
         <View>
       <MapView
          region={{
           latitude: 29.278311,
           longitude: 82.182327,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       </MapView>

     </View>
      )
     }
    }
