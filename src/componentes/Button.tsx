import {ButtonHTMLAttributes} from "react"
import '../styles/button.css'


type ButtonPropos = ButtonHTMLAttributes<HTMLButtonElement> & {isOutLined?: boolean};

export function Button({isOutLined = false, ...props}: ButtonPropos){
    return(
        <button className= 
        {`button ${isOutLined ? 'outlined' : ''}`}{...props} />
    )
} 