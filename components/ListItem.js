import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const ListItem = ({ record }) => {
    
    return (
        <TouchableOpacity>
            <View style={styles.entry} >
                <Text style={styles.col}>{record.created_at}</Text>
                <Text style={styles.col}>{record.description}</Text>
                <Text style={styles.col}>{record.amount}pts</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    entry: {
        flexDirection: 'row',
        width: 300,
        backgroundColor: '#fcfcfc',
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 20
    },
    col: {
        fontSize: 15
    }
});

export default ListItem
