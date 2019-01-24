import React from 'react';
import {Grid, GridItem} from '../Grid';

// Would love to refactor this component
// Ran out of time with this one
const inputStyles = {
  padding: 10,
  margin: '10px 5px',
  borderRadius: 5
}

const Form = ({
  id,
  getUserInput,
  first,
  last,
  email,
  gender,
  username,
  cell,
  dob,
  createUser,
  editUser,
  closeModal,
  modalTitle,
}) => (
  <Grid padding='20px' cols='1'>
    <GridItem alignSelf='center' justifySelf='center' fontSize='2rem' fontColor='#78909c'>{modalTitle}</GridItem>
    
    <Grid padding='10px' cols='2'>
      <input type='text' name='first' value={first} style={inputStyles} onChange={getUserInput} placeholder='enter first name' />
      <input type='text' name='last' value={last} style={inputStyles} onChange={getUserInput} placeholder='enter last name' />
    </Grid>

    <Grid padding='10px' cols='2'>
      <input type='text' name='email' value={email} style={inputStyles} onChange={getUserInput} placeholder='enter email' />

      <select id="gender" name='gender' style={inputStyles} onChange={getUserInput} value={gender}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>

      <input type='text' name='username' value={username} style={inputStyles} onChange={getUserInput} placeholder='enter username' />
      <input type='text' name='cell' value={cell} style={inputStyles} onChange={getUserInput} placeholder='enter cell' />

      {/* TODO: add a calender component to gather the user's DOB */}
      <input type='text' name='dob' value={dob} style={inputStyles} onChange={getUserInput} placeholder='enter date of birth' />
    </Grid>

    <GridItem alignSelf='center' justifySelf='center' fontSize='1rem' fontColor='#ffffff'>
      <button style={{
        border: 'none',
        background: '#27a9f8',
        padding: 10,
        borderRadius: 5,
        color: '#ffffff',
        margin: 20
      }}
      onClick={() => {
          const newUserData = {
            id,
            name: {first,last},
            email,
            gender,
            picture: {thumbnail: ''},
            login: {username},
            cell,
            dob
          }
          if(modalTitle.includes('Edit')) {
            editUser(newUserData)
          }else{
            createUser(newUserData)
          }
      }}>{modalTitle}</button>
      <a onClick={closeModal} style={{color: '#27a9f8', margin: 20, cursor: 'pointer'}}>cancel</a>
    </GridItem>
  </Grid>
);

export default Form;