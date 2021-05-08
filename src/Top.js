import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./top.css"
import PetsIcon from '@material-ui/icons/Pets';
//IconButton API #3: 5 points
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import GestureIcon from '@material-ui/icons/Gesture';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

function Top() {
    return(
        <div class = "top">
            <Link to='/snakegame'>
                <IconButton>
                    < GestureIcon class = "icon"/>
                </IconButton>
            </Link>

            <Link to='/weather'>
                <IconButton>
                    < WbSunnyIcon class = "icon"/>
                </IconButton>
            </Link>
            
            <Link to='/homepage'>
                <IconButton>
                    < PetsIcon class = "icon"/>
                </IconButton>
            </Link>
            <Link to='/randomdoggenerator'>
                <IconButton>
                    < PhotoSizeSelectActualIcon class = "icon"/>
                </IconButton>
            </Link>
            
            <Link to='/'>
                <IconButton>
                    <ExitToAppIcon class = "icon"/>
                </IconButton>
            </Link>
        </div>
    );
}

export default Top