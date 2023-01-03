
import React, { useState, useEffect } from 'react'
import { View } from './components/View';


const getDataf = () => {
  const data = localStorage.getItem('data');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const App = () => {

  const [data1, setdata1] = useState(getDataf());


  const [Name, setTitle] = useState('');
  const [Email, setAuthor] = useState('');
  const [dateofbirth, setIsbn] = useState('');


  const handleAddBookSubmit = (e) => {
    e.preventDefault();

    let book = {
      Name,
      Email,
      dateofbirth

    }
    setdata1([...data1, book]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  }


  const deleteBook = (name) => {
    const filteredBooks = data1.filter((element, index) => {
      return element.dateofbirth !== dateofbirth
    })
    setdata1(filteredBooks);
  }


  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data1));
  }, [data1])

  return (
    <div className='container'>
      <h1>Directory App Dev with 💝</h1>
      <p>Add and Veiw your Data Below</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
            onSubmit={handleAddBookSubmit}>
            <label>Enetr Name-:</label>
            <input type="text" className='form-control' required
              onChange={(e) => setTitle(e.target.value)} value={Name}></input>
            <br></br><br></br><br></br>
            <label>Enetr Email-:</label>
            <input type="text" className='form-control' required
              onChange={(e) => setAuthor(e.target.value)} value={Email}></input>
            <br></br><br></br><br></br>
            <label>Enetr DOB-:</label>
            <input type="text" className='form-control' required
              onChange={(e) => setIsbn(e.target.value)} value={dateofbirth}></input>
            <br></br><br></br><br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {data1.length > 0 && <>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of birth</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={data1} deleteBook={deleteBook} />
                </tbody>
              </table>
            </div>
            <button className='deleteBtn'
              onClick={() => setdata1([])}>DeleteAll</button>
          </>}
          {data1.length < 1 && <div>Please Enter Details to show Data Here...</div>}
        </div>

      </div>
    </div>
  )
}

export default App