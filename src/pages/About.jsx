import { useState } from "react";

const About = () => {
  const [name, setName] = useState(''); 
const handleSubmit = (event) => { 
event.preventDefault(); 
console.log(name); 
} 

    
  return (
    <div> 
      <form onSubmit={handleSubmit}> 
<input type="text" value={name} onChange={(e) => setName(e.target.value)} /> 
<button type="submit">Submit</button> 
</form>

</div> 


  )
}

export default About