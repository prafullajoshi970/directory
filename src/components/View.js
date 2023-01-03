import React from 'react'
// import {Icon} from 'react-icons-kit'
// import {trash} from 'react-icons-kit/feather/trash'

export const View = ({books,deleteBook}) => {
    
    return books.map(data1=>(
       
        <tr key={data1.AllData}>
            <td>{data1.Name}</td>
            <td>{data1.Email}</td>
            <td>{data1.dateofbirth}</td>
            <td className='delete-btn' onClick={()=>deleteBook(data1.Name)}>
                {/* <Icon icon={trash}/> */}
            </td>           
        </tr>            
    
))
}
