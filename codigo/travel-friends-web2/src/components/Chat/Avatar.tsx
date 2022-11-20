import React, { useState } from 'react';
import { styles } from './Chat.styled';

const Avatar = (props: any) => {
  const [hovered, setHovered] = useState(false);  
  
  return(
    <div style={props.style}>
        <div 
          className='transition-3' 
          style={{
            // ...styles.avatarHello, 
            // ...{ opacity: hovered ? 1 : 0}
          }}> Hey Brother</div>

        <div onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => props.onClick && props.onClick()}
          className="transition-3"
          style={{...styles.chatWithMeButton,
          ...{ border: hovered ? '1px solid black' : '4px solid #7a39c0' }}} />
    </div>

    );
};

export default Avatar;  