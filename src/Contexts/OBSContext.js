import React, {createContext, useState} from 'react';

const defaultValue = {
  obs: null,
  data: null,
  setObs: () => null,
  setData: () => null,
  connect: () => null,
  disconnect: () => null,
  setCurrentScene: () => null,
};

export const OBSContext = createContext(defaultValue);

const prepareToSend = (requestType, args = {}) => {
  const generateMessageId = () => {
    return String(Math.random());
  };

  return JSON.stringify({
    'request-type': requestType,
    'message-id': generateMessageId(),
    ...args,
  });
};

const OBSContextProvider = ({children}) => {
  const [data, setData] = useState(null);
  const [obs, setObs] = useState(null);

  const disconnect = () => {
    obs.close();
    setObs(null);
  };

  const connect = (address, password = '') => {
    console.log('This is addres to webscoekt: ');
    console.log(address);
    const ws = new WebSocket(`ws://${address}`);

    ws.onopen = () => {
      // connection opened
      console.log('connection open');
      setObs(ws);
      const whatToSend = prepareToSend('GetCurrentScene', {});
      console.log('whatToSend: ');
      console.log(whatToSend);
      const temp = ws.send(whatToSend); // send a message
      console.log(temp);
    };

    ws.onmessage = (e) => {
      // a message was received
      console.log(e.data);
    };

    ws.onerror = (e) => {
      // an error occurred
      console.log(e);
      console.log(e.message);
    };

    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
    };
  };

  const getScenesList = async () => {
    return await obs.send('GetSceneList');
  };

  const getCurrentScene = async () => {
    return await obs.send('GetCurrentScene');
  };

  const setCurrentScene = async (sceneName) => {
    const whatToSend = prepareToSend('SetCurrentScene', {
      'scene-name': sceneName,
    });
    console.log('whatToSend: ');
    console.log(whatToSend);
    const temp = obs.send(whatToSend);
    console.log(temp);
  };

  const resetSceneItem = async (sceneName, itemName) =>
    await obs.send('ResetSceneItem', {
      'scene-name': sceneName,
      item: {
        name: itemName,
      },
    });

  return (
    <OBSContext.Provider
      value={{
        obs,
        setObs,
        data,
        setData,
        connect,
        disconnect,
        setCurrentScene,
      }}>
      {children}
    </OBSContext.Provider>
  );
};

export default OBSContextProvider;
