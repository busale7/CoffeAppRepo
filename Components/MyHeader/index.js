

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class MyHeader extends Component {
    render() {
      return (
      <Header style={{backgroundColor: "transparent"}} >

        <Left>
            <Button transparent>
                <Icon style={styles.backicon} name='arrow-back' />
            </Button>
        </Left>

        <Body>
        <Title style={styles.header}><Text>Coffe App</Text></Title>
        </Body>
        <Right>
            <Button transparent>
                <Text style={styles.text}>3{" "}
                <Icon name='beer' style={styles.icon} />
                </Text>
            </Button>
        </Right>
        </Header>
      )
    }
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#5cd6d6',
      opacity: 0.6,
    },
    topheader: {
      backgroundColor: '#5cd6d6',
      opacity: 0,
  
    },
    backicon: {
        color: 'white',

        },
    icon: {
      color: 'white',
      fontSize: 17,
      opacity: 1,
      },
      footericon: {
          color: 'white',
          fontSize: 15,
      },
    text: {
        color: 'white',
        fontSize: 15,
        marginTop: 19,
        opacity: 1,
    },
    header: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 17,
      marginTop: 10,
      opacity: 1,
  
      },
      footerbutton: {
          
          color: 'white',
          fontWeight: 'bold',
          fontSize: 17,
          },
      footer: {
          backgroundColor: '#5cd6d6',
          opacity: 0.6,
      }
  });
  
  