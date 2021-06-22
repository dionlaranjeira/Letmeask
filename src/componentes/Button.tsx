import {ButtonHTMLAttributes} from "react"
import '../styles/button.css'


type ButtonPropos = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonPropos){
    return(
        <button className="button" {...props}  />
    )
} 