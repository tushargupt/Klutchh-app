import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Dimensions } from 'react-native';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marked: false
        }
        this.updatee = this.updatee.bind(this);
    }
    updatee(nextState) {
        this.setState(nextState);
    }

    render() {
        return (
            <View style={{}}>
                {this.props.selectedCard[this.props.index] ? (<View>
                    <Image
                        source={{uri: this.props.selectedCard[this.props.index]}}
                        style={{
                            resizeMode: 'contain',
                            height: 40, width: 40, alignItems: 'center', borderRadius: 4, marginHorizontal: 5
                        }}

                    />

                </View>) : (
                    <View style={{ backgroundColor: '#FF326A', height: 40, width: 40, alignItems: 'center', borderRadius: 4, marginHorizontal: 5 }}>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 24,
                                fontWeight: '600'
                            }}
                        >?</Text>
                    </View>
                )}

            </View>
        );
    }
}

export default Card