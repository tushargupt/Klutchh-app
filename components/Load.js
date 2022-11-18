import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Card from './Card';
import PlayerCard from './PlayerCard';

class Load extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creditTotal: 15,
            totalSelected: 0,
            selectedCard: [],
            ind: -1,
            team1: [],
            team2: []
        };
        this.update = this.update.bind(this);
    }

    loadData = async () => {
        fetch(
            "https://api.klutchh.in/v1/rosters/128622/129859?game_type=false",
            {
                method: "get",
                headers: new Headers({
                    accept: "application/json",
                }),
            }
        )
            .then((res) => res.json())
            .then((dat) => {
                this.setState({team1: dat.data.roster1, team2: dat.data.roster2})
            })
            .catch((err) => {
                console.log("Some Error Occured" + err)
            });
    };

    componentDidMount() {
        this.loadData();
        let newARR = [];
        for (let i = 0; i < 5; i++) {
            newARR.push(false);
        }
        this.setState({ creditTotal: 15, totalSelected: 0, ind: -1, selectedCard: newARR })
    }
    update(nextState) {
        this.setState(nextState);
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#211134',
            }}>
                <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'space-evenly', marginLeft: -110 }}>
                    <AntDesign name="left" size={20} color="#fff" />
                    <Text
                        style={{
                            color: '#fff',
                            marginLeft: -35,
                            fontWeight: '600',
                            fontSize: 14
                        }}
                    >Create Team</Text>
                </View>
                <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'center' }}>
                    {this.state.team1.map((val, index) => (
                        <Card index={index} ind={this.state.ind} selectedCard={this.state.selectedCard} />
                    ))}
                </View>
                <Text
                    style={{ color: '#fff', fontSize: 12, fontWeight: '400', alignSelf: 'center', marginVertical: 12 }}
                >Choose five players to join the team</Text>
                <View style={{
                    borderRadius: 24,
                    borderColor: 'rgba(235, 235, 245, 0.3)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 2,
                    elevation: 4,
                    height: 35,
                    width: 150,
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}>
                    <Text
                        style={{
                            color: '#fff',
                            alignSelf: 'center',
                            fontSize: 10,
                            fontWeight: '600'
                        }}
                    >CREDITS LEFT : {this.state.creditTotal}/15</Text>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 15 }}>
                    <View>
                        {this.state.team1.map((val) => (
                            <PlayerCard data={val} creditTotal={this.state.creditTotal} update={this.update} totalSelected={this.state.totalSelected} ind={this.state.ind} selectedCard={this.state.selectedCard} />
                        ))}
                    </View>
                    <View>
                        {this.state.team2.map((val) => (
                            <PlayerCard data={val} creditTotal={this.state.creditTotal} update={this.update} totalSelected={this.state.totalSelected} ind={this.state.ind} selectedCard={this.state.selectedCard} />
                        ))}
                    </View>
                </View>

                <TouchableOpacity style={{ backgroundColor: this.state.creditTotal==0 || this.state.totalSelected ==5? '#FF326A':'#000', borderRadius: 8, alignSelf: 'center', paddingHorizontal: 75, paddingVertical: 12 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#FFF' }}>PREVIEW SELECTION</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Load