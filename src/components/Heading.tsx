type headingType ={
    text: string
}
export default function Heading(props: headingType){
    return (
        <h2 className="font-plush font-medium text-[56px]">{props.text}</h2>
    )
}