import { useEffect, useState } from "react";
import { HomeContainer } from "../styles/containers";
import { Button } from "../styles/elements";

export const Home = () => {
  const [count, setCount] = useState(0);
  const [clickStart,setClickStart] = useState(0);
  
  useEffect(() => {

  },[count]);
  
  return (
    <HomeContainer>
      <Button onClick={e => setCount(count+1)}>
        Click me
      </Button>
      
      <br/>
      <br/>
      <br/>
      
      <h2>Contador - {count}</h2>
      <br/>
      <h2>Start - {clickStart}</h2>
    </HomeContainer>
  )
}