import React, { useState } from 'react'
import { classes } from '../../public/data'

const Class = () => {

  const [data, setData] = useState(classes);
 
  const deleteclass = (idx) => {
    
    data.splice(idx-1, 1)
    setData([...data]);
  }
  return (
    <div className='p-5 h-[85vh] overflow-scroll'>
        <table className='w-[100%]'>
            <thead className='bg-black text-white' >
              <tr>
                <th className='border p-3'>ID</th>
                <th className='border p-3'>Class Name</th>
                <th className='border p-3'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((cl) => {
                return <tr key={cl.id}>
                  <td className='border text-center p-3'>{cl.id}</td>
                  <td className='border text-center p-3'>{cl.name}</td>
                  <td className='border text-center p-3'>
                    <button type='button' className='px-4 text-white py-2 mx-2 bg-red-500 hover:bg-red-700' onClick={() => deleteclass(cl.id)} >Delete</button>
                    <button type='button' className='px-4 text-white py-2 mx-2 bg-blue-500 hover:bg-blue-700'>Edit</button>
                  </td>
              </tr>
              })}
            </tbody>
        </table>
    </div>
  )
}

export default Class
