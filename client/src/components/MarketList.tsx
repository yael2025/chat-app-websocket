
import { PMMarket } from "../types"

interface MarketListProps {
    markets: PMMarket[]
}

const MarketList = ({ markets }: MarketListProps) => {

    return <div>
        {markets.map(m => {
            return <h5>{m.question}</h5>
        })}
    </div>
}

export default MarketList