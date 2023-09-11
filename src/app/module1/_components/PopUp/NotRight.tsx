import Alert from "@/assets/Alert.svg";

type Props ={
    showPopup: boolean
}
console.log("Enterrrrrrr")
const NotRight = ({showPopup}:Props)=>{
    console.log("ShowPopup -",showPopup); 
    return showPopup &&(
        <div className="bg-white fixed inset-0 flex items-center justify-center z-99 bg-black bg-opacity-50">
            <div><img src={Alert}/></div>
            <div>
                <h1>That's not quite right </h1>
                <button className="bg-[#504DFF]">Try Again</button>
            </div>
        </div>
    )
}

export default NotRight;