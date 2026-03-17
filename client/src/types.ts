


export interface PMMarket{
    id: string
    active : boolean
    icon: string
    question: string
    outcomes: string[]
    lastTradePrice: number 
}

export interface PMEvent{
    id: string
    title:string
    startDate:string
    endDate: string
    description: string
    image: string
    markets: PMMarket[]
}
