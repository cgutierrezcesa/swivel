import React from 'react';
import ReactDOM from 'react-dom';
import AppSWBC from './AppSWBC';
import App from './App';

import { useFlags, asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType, osName } from "react-device-detect";
import getUserId from './utils/getUserId';

let id = getUserId();

function MainContent(){

  const {swbcpagechange} = useFlags();


  return(
    <div>
       {swbcpagechange ? <AppSWBC /> : <App /> }
    </div>
  
  
  );
}

(async () => {
 
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '62bb8b40b288aa15948d600c',
    user: {
      key: id,
      custom: {
        device: deviceType,
        operatingSystem: osName,
      },
    },
  }
  );

ReactDOM.render(
  
  <LDProvider>
   <MainContent /> 
  </LDProvider>,

  document.getElementById('root')
);
})();