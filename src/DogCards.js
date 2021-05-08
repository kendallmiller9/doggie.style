import React, { useEffect, useState } from 'react';
import data from './Firebase';
//3rd party API
import TinderCard from 'react-tinder-card';
import './cards.css';


function DogCards() {
    const [dog, setDog] = useState([]);

    useEffect(() => {
         const unsubscribe = data.firestore().collection("dogs").onSnapshot(snapshot => (
             setDog(snapshot.docs.map(doc => doc.data()))
         ))
     return() =>{
         //helps with memory
         unsubscribe();
     }
     },[]); 


    return(
        <div>
            <div class = 'cardContainer'>
                {dog.map(dog1 => (
                        <TinderCard className = "swipe" id = {dog1.name} preventSwipe={["up","down"]}>
                            <div style = {{backgroundImage: `url(${dog1.url})`}} class = "card">
                                <div class = 'words'>
                                    <container class = 'flex'>
                                        <h1 class = 'type'>{dog1.name}</h1>
                                        <h1 class = 'age'>{dog1.age}</h1>
                                    </container>
                                    <h3 class = 'type2'>{dog1.breed}</h3>
                                    <h4 class = 'type3'>{dog1.play}</h4>
                                </div>
                            </div>
                            <h5 style={{textAlign: 'center'}} class = 'contactemail'>
                                Contact at: {dog1.email}
                            </h5>
                        </TinderCard>
                ))}
            </div>
        </div>
    ); 
}

export default DogCards