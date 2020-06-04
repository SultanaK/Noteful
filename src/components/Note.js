import React from 'react'
//import { Link } from 'react-router-dom';

export default function Note(props) {
    return (
      <ul>
      {props.notes.map((note)=> 
        <li key ={note.id}>
                {note.name}
                {note.content}
        </li>
        )} 
      </ul> 
    );
}