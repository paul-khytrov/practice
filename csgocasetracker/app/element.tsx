
interface Skin
{
    Rarity: "Consumer" | "Industrial" | "Mil-Spec" | "Restricted" | "Classified" | "Covert" | "Contraband"
    Name: string
    Float: number
    IsStatTrak: boolean
}

export default function element(skin: Skin)
{
    
  var  rarityColor = "#";
  switch(skin.Rarity)
  {
    

    case "Consumer":
      rarityColor  = "#B0C3D9"
      break
    case "Industrial":
      rarityColor = "#5E98D9"
      break
    case "Mil-Spec":
      rarityColor = "#4B69FF"
      break
    case "Restricted":
      rarityColor = "#8847FF"
      break
    case "Classified":
      rarityColor = "#D32EE6"
      break
    case "Covert":
      rarityColor = "#EB4B4B"
      break
    case "Contraband":
      rarityColor = "#FFD700"
      break
  }
  if (skin.IsStatTrak)
  {
    return  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <div style={{ width: '8px', height: '24px', backgroundColor: rarityColor }}/>
                <p style={{color: "#EC8D06"}}>StatTrak™</p>
                <h1>{skin.Name}</h1>
                <p>{skin.Float}</p>
                <p>{skin.IsStatTrak}</p>
            </div>
  }
  else
  {
    return  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <div style={{ width: '8px', height: '24px', backgroundColor: rarityColor }}/>
                <h1>{skin.Name}</h1>
                <p>{skin.Float}</p>
                <p>{skin.IsStatTrak}</p>
            </div>
  }
  
}