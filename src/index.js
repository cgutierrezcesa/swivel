import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType, osName } from "react-device-detect";
import getUserId from './utils/getUserId';

let id = getUserId();

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
    <App />
  </LDProvider>,

  document.getElementById('root')
);
})();