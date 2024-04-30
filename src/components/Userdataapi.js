import React, { useState } from 'react'
import { Select } from 'antd';
const Userdataapi = () => {

const [selectdata,setSelectData] = useState({
    seletdata1:""
})



  return (
    <>


    <Select
    showSearch
    onChange={((e)=>setSelectData(e.target.value))}
    style={{ width: 200 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'closed',
      },
      {
        value: '3',
        label: 'communicated',
      },
      {
        value: '4',
        label: 'identified',
      },
      {
        value: '5',
        label: 'resolved',
      },
      {
        value: '6',
        label: 'cancelled',
      },
    ]}
  />
    </>
  )
}

export default Userdataapi

