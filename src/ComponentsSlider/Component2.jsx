import React,{useState} from "react";
import '../styles/comp2Style.css'

import sperm_5 from '../image/second_page/sprem_5.png'
import sperm_4 from '../image/second_page/sperm_4.png'
import sperm_3 from '../image/second_page/sperm_3.png'
import sperm_2 from '../image/second_page/sperm_2.png'
import sperm_1 from '../image/second_page/sperm_1.png'


const Component2 = () => {
  const [scrollValue,setscrollBar]=useState(0);

  const handleChange =(event)=>{
    setscrollBar(event.target.value)
  }

  return (
    <div className="container">
      <img src={sperm_3} className="sperm_second_3"></img>
      <img src={sperm_2} className="sperm_second_2"></img>
      <img src={sperm_1} className="sperm_second_1"></img>
      <div className="text_message_container">
        Текст <br/>сообщения
      </div>
      <div className="scrolling_text">
        <div className="textslider">
          <input type="range" min="1" max="100" className="scrollBar" value={scrollValue} onChange={handleChange}/>
        </div>
        <div className="text-container">
          <div className="text-content" style={{ transform: `translateY(-${scrollValue}%)` }}>
          <b>Lorem ipsum dolor sit amet </b>, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. Integer varius est orci, vel egestas felis dictum nec. Phasellus porta ex sit amet turpis finibus, sed vestibulum nisl efficitur. Praesent ultrices diam enim. In ut tellus sed sem placerat sollicitudin. Donec quis mollis dolor. Etiam viverra, arcu cursus porttitor porttitor, diam nunc auctor nisl, quis placerat magna erat et odio. Phasellus feugiat turpis quis mollis lacinia. Sed ac orci et nisi venenatis pharetra ac non arcu.
          <br/>
          <br/>
          In a dapibus nulla. Aenean erat orci, egestas non orci at, varius tempus risus. Ut suscipit lorem magna, quis auctor leo molestie ac. Integer ut efficitur neque. Curabitur sollicitudin ipsum dolor, et tempus massa lacinia a. Donec efficitur egestas facilisis. Aliquam feugiat convallis arcu quis sollicitudin. Nullam eleifend iaculis sapien id scelerisque.
          <br/>
          <br/>
          Pellentesque justo turpis, ullamcorper in dapibus non, auctor at odio. Nulla interdum, lectus vel fringilla laoreet, libero ligula vulputate neque, quis tincidunt arcu ex sed ipsum. Aliquam a lobortis erat. Curabitur tristique aliquam lectus, tempor dignissim lorem tincidunt et. Vivamus velit velit, laoreet id iaculis quis, sagittis et magna. Morbi eget neque vestibulum, accumsan ipsum volutpat, interdum nulla. Cras maximus, diam ultricies tristique luctus, ex mi consectetur dui, ut feugiat magna purus et felis. Maecenas sit amet fringilla nunc. Donec vel ex vitae elit tincidunt pretium. Vivamus in nibh eu massa rhoncus finibus id quis orci. Proin vel libero quam. Vestibulum non maximus erat. Etiam condimentum, augue a rutrum efficitur, enim odio cursus elit, vitae fermentum dolor est in ipsum.
          </div>
        </div>    
      </div>
      <img src={sperm_4} className="sperm_second_4"></img>
      <img src={sperm_5} className="sperm_second_5"></img>
    </div>
  );
}

export default Component2
