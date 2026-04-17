import { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { toast } from 'react-toastify'

interface Car {
    name: string
    year: string
    type: string
    color: string
    popular: boolean
    previewImg: string
    carSpecifications: {
        maxLiters: string
        transmissionType: string
        passengerCapacity: number
    }
    priceTags: {
        currentPrice: string
        oldPrice: string
        discount: boolean
    }    
}

interface CarDataContextType {
    carsData: Car[]
}

interface carProps {
    children: React.ReactNode 
}


export const CarDataContext = createContext<CarDataContextType>({carsData: []})

export function CarDataProvider({children}: carProps) {

    const carsDataApi = 'https://raw.githubusercontent.com/SLIVTIM/Morent_-car-rent-website-data/refs/heads/main/carsData.json'
    
    const [carsData, setCarsData] = useState<Car[]>([])

    useEffect(() => {
        axios.get(carsDataApi)
        .then(data => setCarsData(data.data))
        .catch(() => toast.error("Failed to fetch cars data !"))
    }, [])

    const carDataValue = useMemo(() => {
        return {carsData}
    }, [carsData])

    return (
        <CarDataContext.Provider value={carDataValue}>
            {children}
        </CarDataContext.Provider>
    )
}