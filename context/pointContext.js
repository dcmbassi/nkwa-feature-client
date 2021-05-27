import axios from 'axios'
import React, { useState, useContext, useCallback } from 'react'
import { apiUrl } from '../utils/apiUrl'
import { toReadableDate } from '../utils/functions'

const PointContext = React.createContext()

export const usePoints = () => { return useContext(PointContext) }

export const PointProvider = ({ children }) => {
    const [entries, setEntries] = useState([])
    const [totalPoints, setTotalPoints] = useState(300)

    const fetchPointData = useCallback(async () => {
        try {
            const res = await axios.get(apiUrl)
            const sanitised = res.data.map(item => {
                return { ...item, created_at: toReadableDate(item.created_at) }
            })
            setEntries(sanitised)
        } catch (e) {
            return console.log(e)
        }
    }, [])

    const storePoints = useCallback(async ({description, amount}) => {
        try {
            const res = await axios.post(apiUrl, {description, amount})
            const newRes = {...res.data, created_at: toReadableDate(res.data.created_at)}
            setEntries(prevEntries => [...prevEntries, newRes])
            setTotalPoints(prev => prev - amount)
        } catch (e) {
            return console.log(e)
        }
    }, [])
    


    const addItem = (item) => {
        setEntries(prevEntries => [...prevEntries, item])
    }



    return (
        <PointContext.Provider value={{ entries, totalPoints, storePoints, fetchPointData }}>
            {children}
        </PointContext.Provider>
    )
}

