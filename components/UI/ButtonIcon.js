import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"
const ButtonIcon = ({name,size,color,onPress}) => {
  return (
   <Pressable onPress={onPress} style={(pressed)=>pressed && styles.pressed}>
     <View style={styles.buttonContainer}>
      <Ionicons name={name} size={size} color={color}/>
    </View>
   </Pressable>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        margin:8
    },
    pressed:{
        opacity:0.75,
    }
})