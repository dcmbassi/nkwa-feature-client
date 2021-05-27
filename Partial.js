import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import RecentPoints from './components/RecentPoints';
import TotalPoints from './components/TotalPoints'
import { usePoints } from './context/pointContext';

const Partial = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)

    const { totalPoints, storePoints } = usePoints()

    const showModal = () => setModalVisible(true)

    const handleSubmit = () => {
        if (description && amount) {
            if (amount > totalPoints) {
                Alert.alert('Not enough points', 'Unable to redeem more than you have', [{text: 'OK'}])
            } else {
                let item = {description, amount: parseInt(amount) }
                storePoints(item)
                setModalVisible(false)
            }
        } else {
            Alert.alert('Fields not valid', 'Please enter a valid description and amount', [{text: 'OK'}])
        }
    }

    return (
        <View style={styles.container}>
            <TotalPoints showModal={showModal} />
            <RecentPoints />
            <Modal animationType='slide' transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.centered}>
                    <View style={styles.modalWrapper}>
                        <TextInput style={styles.input} placeholder='Enter description' onChangeText={text => setDescription(text)} />
                        <TextInput style={styles.input} keyboardType='numeric' placeholder='Enter amount' onChangeText={text => setAmount(text)} />
                        <View style={styles.formButtons}>
                            <Pressable style={[styles.btn, styles.btnClose]} onPress={() => setModalVisible(false)}>
                                <Text style={[styles.btnText, styles.btnTextCancel]}>Cancel</Text>
                            </Pressable>
                            <Pressable style={[styles.btn, styles.btnSubmit]} onPress={handleSubmit}>
                                <Text style={[styles.btnText, styles.btnTextSubmit]}>Submit</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        backgroundColor: '#efefef',
        padding: 15,
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: .5,
        elevation: 10
    },
    input: {
        height: 40,
        backgroundColor: '#eee',
        borderRadius: 15,
        marginBottom: 15,
        paddingHorizontal: 15,
        width: 250
    },
    formButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250,
        marginTop: 20
    },
    btn: {
        padding: 7,
        borderRadius: 999,
        width: 100
    },
    btnClose: {
        borderWidth: 1,
        borderColor: '#2fb28f',

    },
    btnSubmit: {
        backgroundColor: '#2fb28f',
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btnTextCancel: {
        color: '#2fb28f'
    },
    btnTextSubmit: {
        color: 'white'
    }
});

export default Partial
