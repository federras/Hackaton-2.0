import React from "react";
import { useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import "./ConnectUser.css";

const ConnectUser = ({ setEstaConectado, estaConectado, setAddressUser, setIsLoading }) => {
  setIsLoading(true);
  const { disconnect } = useDisconnect();
  const { connect, data } = useConnect({
    connector: new InjectedConnector(),
  });

  let address = ''
  if (data) {
    address = data.account;
    console.log(data.account)
  } 

  setIsLoading(false);

  return (
    <div>
      {estaConectado ? (
        <button
          onClick={() => {
            disconnect();
            setEstaConectado(false);
            setAddressUser(address);
          }}
        >
          Disconnect
        </button>
      ) : (
        <button
          onClick={() => {
            connect();
            setEstaConectado(true);
            setAddressUser=""
          }}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectUser;
