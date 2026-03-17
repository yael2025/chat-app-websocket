
interface MyButtonProps {
    color: string,
    size: number,
    text: string
}

const MyButton = (props: MyButtonProps) => {

    return <button style={{color:props.color, fontSize:props.size}}>
            {props.text}
    </button>

}

export default MyButton