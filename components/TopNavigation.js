import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TopNavigation = ({index, setIndex}) => {
  return (
    <View style={{...styles.container, backgroundColor: darkTheme ? "#282C35" : "white",}}>
      {index === 0}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop: StatusBar.currentHeight,
      alignItems: 'center',
      justifyContent: 'center',
    }
  })

export default TopNavigation