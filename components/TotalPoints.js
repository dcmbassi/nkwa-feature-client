import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { usePoints } from '../context/pointContext';


const TotalPoints = ({showModal}) => {
    const {totalPoints} = usePoints()

    return (
        <View style={styles.mainArea}>
            <Text style={styles.title}>Nkwa Points</Text>
            <Text style={styles.large}>{totalPoints}</Text>
            <Text style={styles.medium}>POINTS</Text>
            <TouchableOpacity style={styles.btn} onPress={showModal}>
                <Text style={styles.btnText}>Redeem Points</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainArea: {
        backgroundColor: '#fcfcfc',
        padding: 20,
        width: 300,
        marginBottom: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#2fb28f',
        textAlign: 'center'
    },
    large: {
        fontWeight: '700',
        fontSize: 80
    },
    medium: {
        fontWeight: '700',
        fontSize: 30
    },
    btn: {
        backgroundColor: '#2fb28f',
        width: 220,
        padding: 15,
        borderRadius: 10,
        marginVertical: 20
    }, 
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default TotalPoints
