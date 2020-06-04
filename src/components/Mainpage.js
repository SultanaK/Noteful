import React from 'react'
import { Link } from 'react-router-dom';


export default function  Main (props) {
   console.log(props.folders)
   console.log(props.notes) 
    return(
       <ul>
        {props.folders.map((folder) => {
            return(
            <li key={folder.id}>
                <Link> {folder.name }</Link>
            </li>)
        })}
       </ul>
    )
}