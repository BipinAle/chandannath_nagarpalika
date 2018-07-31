import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Dimensions,Image,ScrollView} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import MapView,{ Marker } from 'react-native-maps';
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default class Nirnayaharu extends Component<Props> {
     render() {
        return (
          <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 29.278311,
            longitude: 82.182327,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        <Marker
          coordinate={{
            latitude: 29.278311,
            longitude:82.182327,
          }
          }

        />
        </MapView>
      </View>
      )
     }
    }
