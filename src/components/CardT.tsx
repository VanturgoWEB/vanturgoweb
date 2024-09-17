import defaultCard from '../assets/card1.svg'
type cardprops = {
    image?: string, //Todo: add image as a prop
    title: string,
    description: string,
    className?: string | '',
}

export default function Card(props: cardprops){
    
    return (
        <div className={`rounded-3xl drop-shadow-md hover:drop-shadow-lg hover:scale-[103%] duration-300 ` + props.className}>
            <img src={props.image ? props.image : defaultCard} alt="" className='rounded-t-3xl w-full h-fit' />
            <div className="bg-white py-6 flex flex-col items-center rounded-b-3xl h-2/5">
                <p className="font-plush font-medium text-3xl">{props.title}</p>
                <p className='mt-3  px-14 text-center font-medium text-black text-opacity-60 h-40'>{props.description}</p>
            </div>
        </div>
    );
}