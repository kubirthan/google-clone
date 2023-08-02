import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Search({hideButton = false}) {
    const [{}, dispatch] = useStateValue();
    const [input,setInput] = useState("");
    const  navigate = useNavigate();

    const search = (e) =>{
        e.preventDefault();

        console.log("you hit the search buton >>", input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        //do something with input...
        navigate('/search');
    }


  return (
    <form className='search'>
        <div className='search_input'>
            <SearchIcon className='search_inputIcon'/>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <MicIcon/>
        </div>

        {!hideButton ? (
             <div className='search_button'>
             <Button variant='outLined' type='submit'  onClick={search}>Google Search</Button>
             <Button variant='outLined'>I'm Feeling Lucky</Button>
         </div>

        ): (
            <div className='search_buttonHidden'>
            <Button variant='outLined' type='submit'  onClick={search}>Google Search</Button>
            <Button variant='outLined'>I'm Feeling Lucky</Button>
        </div>
        )}
       

    </form>
  )
}

export default Search;