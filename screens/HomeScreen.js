import React from 'react';
import { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, TextComponent } from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity>
                    <Text>Register a Course</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Search a Course</Text>
                </TouchableOpacity>
            </View>
        )
    }
}