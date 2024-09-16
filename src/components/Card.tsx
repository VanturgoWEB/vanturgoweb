import defaultCard from '../assets/defaultCard.svg'
type cardprops = {
    // image: string, //Todo: add image as a prop
    title: string,
    description: string,
    className?: string | '',
}

export default function Card(props: cardprops){
    return (
        <div className={`rounded-3xl drop-shadow-md hover:drop-shadow-lg hover:scale-[103%] duration-300 ` + props.className}>
            <img src={defaultCard} alt="" className='rounded-t-3xl w-full h-fit' />
            <div className="bg-white py-6 flex flex-col items-center rounded-b-3xl">
                <p className="font-plush font-medium text-4xl">{props.title}</p>
                <p className='mt-3  px-14 text-center font-medium text-black text-opacity-60 h-40'>{props.description}</p>
            </div>
        </div>
    );
}