import React, {useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { usePoints } from '../context/pointContext';
import ListItem from './ListItem';

const RecentPoints = () => {
    const { totalPoints, entries, fetchPointData } = usePoints()

    useEffect(() => {
        fetchPointData()
    }, [totalPoints])

    const renderItem = ({ item }) => (<ListItem record={item} />)

    return (
        <View style={{flex: 1}}>
            <Text style={styles.subHeading}>Recent Points</Text>
                <FlatList
                    data={entries}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />

        </View>
    )
}

const styles = StyleSheet.create({
    subHeading: {
        color: '#2fb28f',
        marginBottom: 15
    }
})

export default RecentPoints
