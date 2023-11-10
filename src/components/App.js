import React, {useState, useEffect} from "react";

// create your App component here

function App()
{
    const [isLoaded, setIsLoaded] = useState(false);
    const [dog, setDog] = useState();
    useEffect(() => 
    {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then((data) => 
        {
            setDog(data.message);
            setIsLoaded(true);
    })
        
    }
, []);    
    
return(
    <div>
        {isLoaded? <img src={dog} alt='A Random Dog'></img> : <p>Loading...</p> }
    </div>
);
}
export default App;