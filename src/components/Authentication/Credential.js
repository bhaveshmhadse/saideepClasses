import React, { useState } from 'react';
import './cred.css';
import axios from 'axios';
import URLL from '../URL';
const Users = () => {
  const [USERNAME, changeUSERNAME] = useState('');
  const [PASSWORD, changePASSWORD] = useState('');
  const [Owners, setOwners] = useState([
    ['Pranav', 'Pranav@12345'],
    ['Devanand', 'Devanand@12345'],
    ['Hemant', 'Hemant@12345'],
  ]);

  // useEffect(() => {
  //   getUserNamesAndPasswords();
  // }, []);

  // const getUserNamesAndPasswords = async () => {
  //   let data = await await await axios.get(URL + '/owners');
  //   let dataObj = data.data;
  //   console.log(dataObj);
  //   setOwners(dataObj);
  // };

  const getStudentList = async () => {
    let Students = await axios.get(URLL + '/students');
    const element = document.createElement('a');
    const File = new Blob([Students.data], { type: 'text/plain' });
    element.href = URL.createObjectURL(File);
    element.download = 'StudentList.txt';
    element.click();
  };

  const check = async () => {
    for (let Owner of Owners) {
      const isValidUser = Owner[0] === USERNAME && Owner[1] === PASSWORD;
      if (isValidUser) return true;
    }
    alert('Invalid Password or Username!');
    return false;
  };

  const handleUser = e => {
    e.preventDefault();
    changeUSERNAME(e.target.value);
  };
  const handlePassword = e => {
    e.preventDefault();
    changePASSWORD(e.target.value);
  };

  const submit = async () => {
    console.clear();
    let ans = await check();
    if (ans) {
      await getStudentList();
    }
  };

  return (
    <>
      <div className='form1'>
        <p>
          Username :
          <input type='text' placeholder='username' onChange={handleUser} className='input1' title='Please fill Your UserName' required />
        </p>
        <br></br>
        <p>
          Password :
          <input type='password' placeholder='password' onChange={handlePassword} className='input1' title='Please fill Your Password' required />
        </p>
        <div>
          <button className='submit1' onClick={submit}>
            Get Students List
          </button>
        </div>
      </div>
    </>
  );
};

export default Users;
