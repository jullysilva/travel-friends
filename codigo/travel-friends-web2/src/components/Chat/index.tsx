import React, { useState } from 'react';
import Avatar from './Avatar';
import WindowChat from './WindowChat';

const Chat = () => {
  const [visible, setVisible] = useState(false);  
  
  return(
    <div>
      <WindowChat 
        visible={visible}
      />
      <Avatar
        onClick={() => setVisible(true)}
        style={{position: 'fixed', bottom: '24px', right: '24px'}}/>
    </div>

    );
};

export default Chat;  