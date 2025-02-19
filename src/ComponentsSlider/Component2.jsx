import React,{useState} from "react";
import '../styles/comp2Style.css'

const Component2 = () => {
  const [scrollValue,setscrollBar]=useState(0);

  const handleChange =(event)=>{
    setscrollBar(event.target.value)
  }

  return (
    <div className="container">
      <div className="textslider">
        <input type="range" min="1" max="100" className="scrollBar" value={scrollValue} onChange={handleChange}/>
      </div>
      <div className="text-container">
        <div className="text-content" style={{ transform: `translateY(-${scrollValue}%)` }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at arcu quis justo dictum auctor. 
          Vestibulum sodales dui id ligula vehicula, et auctor mauris scelerisque. Donec eget purus eget orci 
          dignissim ullamcorper a vel libero. Curabitur venenatis diam et lorem hendrerit, et ultrices odio 
          aliquet. Proin sodales tortor at odio gravida, at tincidunt augue consectetur. Sed efficitur eros 
          ac erat faucibus, et convallis magna ullamcorper. Duis ultricies sapien eget enim dictum, et gravida 
          nisl suscipit. Integer scelerisque metus at orci suscipit, sit amet egestas magna viverra.
        </div>
      </div>
    </div>
  );
}

export default Component2
