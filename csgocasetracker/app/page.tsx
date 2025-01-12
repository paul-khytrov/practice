'use client'

interface Skin
{
    key?: number
    Rarity: "Consumer" | "Industrial" | "Mil-Spec" | "Restricted" | "Classified" | "Covert" | "Contraband"
    Name: string
    Float: number
    IsStatTrak: boolean
}


import { useState } from 'react';
import Element from './element';

export default function Home() {
  var [skins, addSkin] = useState<Skin[]>([])

  const fetchData = async () => {
    const response = await fetch('https://steamcommunity.com/id/theanimaker/inventory/json/730/2'); // Replace with your API endpoint
    const result = await response.json();
    console.log(result);
  };
  
  function handleSkin() 
  {
    fetchData();
    addSkin([...skins, {Rarity: "Mil-Spec", Name: "Glock-18 | Bunsen Burner", Float: 0.0001, IsStatTrak: true}])
  }
  return (
    
    <div className="container">
       <h1>CS:GO Case Tracker</h1>
       <p>Track your CS:GO case openings!</p>
       <button onClick={handleSkin}>Add skin</button>
       <div className="skin-container">
        {skins.map((element, index) => (
          <Element key={index} Rarity={element.Rarity} Name={element.Name} Float={element.Float} IsStatTrak={element.IsStatTrak}/>
        ))}
       </div>
    </div>
  );
}

