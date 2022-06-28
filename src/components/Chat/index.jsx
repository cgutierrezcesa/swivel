import {useState} from 'react';
import ChatIcon from './chat.svg'
import 'animate.css';
import './Chat.css';


export default function Chat(){

    const [isActive, setIsActive] = useState(false);
   

const handleClick = () => {
// 👇️ toggle
setIsActive(current => !current);

// 👇️ or set to true
// setIsActive(true);
};

      
    return(
        <div>

<img src={ChatIcon} alt="Chat-alt" className="open-button animate__animated animate__bounceInRight" onClick={handleClick}></img>

<div class="chat-popup" id="myForm" style={ isActive ? { display:'block'} : {display : 'none'} } >
  <form class="form-container">
    <h1>Chat</h1>

    <label for="msg"><b>Message</b></label>
    <textarea placeholder="Type message.." name="msg" required></textarea>

    <button type="submit" class="btn">Send</button>
    <button type="button" class="btn cancel" onClick={handleClick} >Close</button>
  </form>
</div>

        </div>
    );
}

