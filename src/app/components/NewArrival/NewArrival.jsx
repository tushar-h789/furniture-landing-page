import { newArrival } from './NewArrival'
import NewArrivalCard from './NewArrivalCard'

const NewArrival = () => {
  return (
    <div>
        <h2 className="font-mochiy font-bold text-3xl text-center my-28">New Arrival</h2>
        <div className='grid grid-cols-4 gap-2 mx-auto'>
            {
                newArrival.map((arrival, index)=>(
                    
                    <div key={index}>
                        <NewArrivalCard arrival={arrival}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default NewArrival