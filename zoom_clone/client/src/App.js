import React from 'react';
import { Typography,AppBar } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notificationjs';
import Options from './components/Options';


const App=()=>{
    return (
        <div>
          <AppBar>
              <Typography variant="h6" color="inherit" className="AppBar-title">
                  Video Player
              </Typography>
          </AppBar>
        
          <VideoPlayer/>
          <Options>
            <Notifications/>
          </Options>
         
        </div>
    );
}

export default App;
 