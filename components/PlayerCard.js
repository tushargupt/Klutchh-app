import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Dimensions } from 'react-native';

class PlayerCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        };
    }

    render() {
        return (
            <TouchableOpacity style={{ alignItems: 'center', borderRadius: 4, marginHorizontal: 10, flexDirection: 'row', borderColor: this.state.selected ? "#FF326A" : 'rgba(255, 255, 255, 0.3)', borderWidth: 1, marginVertical: 7 }}
                onPress={() => {
                    if (!this.state.selected && this.props.creditTotal - this.props.data?.credit >= 0 && this.props.totalSelected < 5) {
                        this.setState({ selected: !this.state.selected });
                        this.props.update({ creditTotal: this.props.creditTotal - this.props.data?.credit, totalSelected: this.props.totalSelected + 1 });
                        let arr = [];
                        let cnt = 0;
                        for (let i = 0; i < 5; i++) {
                            
                                if(this.props.selectedCard[i]==false && cnt<1)
                                {
                                    arr[i] = this.props.data?.image_url || "https://images.pexels.com/photos/220383/pexels-photo-220383.jpeg?auto=compress&cs=tinysrgb&w=600";
                                    cnt++;

                                }
                                else
                                arr[i] = this.props.selectedCard[i]
                        }
                        this.props.update({ ind: this.props.ind + 1, selectedCard: arr })

                    }
                    else if (this.state.selected) {
                        this.setState({ selected: !this.state.selected });
                        this.props.update({ creditTotal: this.props.creditTotal + this.props.data?.credit, totalSelected: this.props.totalSelected - 1 })
                        let arr = [];
                        let cnt = 0;
                        for (let i = 0; i < 5; i++) {
                            if (this.props.selectedCard[i] === (this.props.data?.image_url || "https://images.pexels.com/photos/220383/pexels-photo-220383.jpeg?auto=compress&cs=tinysrgb&w=600") && cnt<1){
                                arr[i] = false;
                                cnt++;
                            }
                            else
                                arr[i] = this.props.selectedCard[i]
                        }
                        this.props.update({ ind: this.props.ind - 1, selectedCard: arr })
                    }
                }}
            >
                <Image
                    source={{ uri: this.props.data?.image_url || "https://images.pexels.com/photos/220383/pexels-photo-220383.jpeg?auto=compress&cs=tinysrgb&w=600" }}
                    style={{
                        resizeMode: 'contain',
                        width: 65,
                        height: 65,
                        borderRadius: 4,
                        borderWidth: 1,
                        borderColor: this.state.selected?"#FF326A":'#fff'
                    }}
                />
                <View style={{ alignItems: 'center', padding: 0 }}>
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', width: 75, height: 47, padding: 5 }}>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 12,
                                fontWeight: '600'
                            }}
                        >{this.props.data?.name}</Text>
                        {!this.state.selected && (
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 8,
                                fontWeight: '400'
                            }}
                        >
                            K/D {this.props.data?.first_kill_percentage}
                        </Text>
                        )}
                    </View>
                    <View style={{ alignItems: 'center', backgroundColor: this.state.selected ? '#FF326A' : 'rgba(255, 255, 255, 0.1)', width: 75 }}>
                        <Text style={{
                            color: this.state.selected ? "#FFF" : '#FF326A',
                            fontSize: 12,
                            fontWeight: '600',
                        }}>{this.props.data?.credit} Credits</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default PlayerCard