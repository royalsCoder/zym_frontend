import React, { createContext, useState } from 'react'

export const adddata = createContext("");
 

function ContestProvider(children) {

  const [udata,setudata] = useState("");

  return (
    <>
      <adddata.Provider value={{udata,setudata}}>
      {{children}}
      </adddata.Provider>

    </>
  )
}

export default ContestProvider
