import React, { useEffect, useState } from "react";
import { Header } from "../componentes/Header";

import "./PaginaHome.css";
import { SeccionUsuario } from "../componentes/SeccionUsuario";
import ConnectUser from "../componentes/ConnectUser";
import Loader from "../componentes/Loader";

// import { useContractReads } from 'wagmi'

const PaginaHome = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [addressUser, setAddressUser] = useState("");
  const [estaConectado, setEstaConectado] = useState(false);
  // const {address} = getAccount()
  
  useEffect(()=>{
    console.log(isLoading)
  },[addressUser])

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className="bodyBorder">
      <Header />
      <ConnectUser
        setEstaConectado={setEstaConectado}
        estaConectado={estaConectado}
        setAddressUser={setAddressUser}
        setIsLoading={setIsLoading}
      />
      {estaConectado && <SeccionUsuario address={addressUser}/>}
      {/* <div>{balance !== undefined ?? <p>BALANCE: {balance}</p>}</div> */}
    </section>
  );
};


export { PaginaHome };
