import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Header } from '../../components'

export default class Home extends Component {

  onPlayPress = () => {
    console.log("onPlayPress event handler");
  };

  render () {
    return (
      <View style={styles.container}>
        <Header />
        {/* Play Button */}
        <TouchableOpacity onPress={this.onPlayPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require("../../assets/icons/play_arrow.png")}
            style={styles.playIcon}
          />
          <Text style={styles.play}>PLAY!</Text>
        </TouchableOpacity>
        {/* Hi-Score */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require("../../assets/icons/trophy.png")}
            style={styles.trophyIcon}
          />
          <Text style={styles.hiscore}>Hi-score: 0</Text>
        </View>
      </View>
    )
  }
}
