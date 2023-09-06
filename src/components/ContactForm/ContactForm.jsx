
import { useState } from 'react';
// import css from './ContactForm.module.css';
import {useSelector, useDispatch } from "react-redux";
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const setState = {
    name: setName,
    number: setNumber
  }
  
  const handleChange = e => {
        const { name, value } = e.target;
        setState[name](value);
  }

  const reset= ()=> {
    setName("")
    setNumber("")
  }
  
  const findContact = name => contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !number) return Notiflix.Notify.failure(`Fill in all fields`);
    if (findContact(name)) return Notiflix.Notify.failure(`${name} is already in contacts`);
    dispatch(
      addContact({
      name,
      number
    }));
    reset()
   
   };

  
  return (
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           
          <Typography component="h1" variant="h5" >
            Add contact
          </Typography>
          <Box component="form" onChange={handleChange} onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              pattern="^[a-zA-Zа-яіїєА-ЯІЇЄ]+(([' \-][a-zA-Zа-яіїєА-ЯІЇЄ ])?[a-zA-Zа-яіїєА-ЯІЇЄ]*)*$"
              value={name}
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              value={number}
              label="Number"
              type="tel"
              id="number"
              autoComplete="number"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
        )
}
