import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default function ItemList({ item, markItem, unmarkItem, removeItem }) {
  return (
    <View style={styles.itemList}>
        <Text style={item?.bought ? styles.itemBought : styles.itemToBuy}>
            {item?.name}
        </Text>
        {!item?.bought ? (
        <TouchableOpacity style={styles.actionIcon} onPress={() => markItem(item?.id)}>
            <Ionicons name='lock-closed' size={24} color = '#5C3023'/>
        </TouchableOpacity>
        ) : (
            <TouchableOpacity style={styles.actionIcon} onPress={() => unmarkItem(item?.id)}>
            <Ionicons name='lock-open' size={24} color = '#5C3023'/>
        </TouchableOpacity>
        )}
        <TouchableOpacity 
            style={[styles.actionIcon, {backgroundColor: "#5C3023"}]}
            onPress={() => removeItem(item?.id)}
        >
            <Ionicons name= 'remove-circle' size= {24} color='#FED664'/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
itemList:{
    backgroundColor: '#976532',
    padding: 15,
    borderRadius: 15,
    marginVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
itemToBuy:{
    flex: 1,
    color: '#fff',
    fontSize: 24,
    textDecorationLine: 'none'
},
itemBought:{
    flex: 1,
    color: '#fff',
    fontSize: 24,
    textDecorationLine: 'line-through'
},
actionIcon:{
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#FED664'
}
})