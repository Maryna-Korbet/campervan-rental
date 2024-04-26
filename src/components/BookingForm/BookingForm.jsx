import React, { useState } from 'react';
import {
  FormContainer,
  FormTextList,
  FormText,
  FormInputsContainer,
  FormInput,
  FormTextarea,
  FormButton,
} from './BookingForm.styled';
import { SecondTitle } from 'components/GlobalStyles';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, bookingDate } = formData;

    if (!name || !email || !bookingDate) {
      window.alert('Please fill in all required fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      window.alert('Invalid email format');
      return;
    }

    window.alert('Form submitted successfully');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTextList>
        <SecondTitle>Book your campervan now</SecondTitle>
        <FormText>Stay connected! We are always ready to help you.</FormText>
      </FormTextList>

      <FormInputsContainer>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
          />

          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
          />
  
          <FormInput
            type="date"
            id="bookingDate"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            placeholder='Booking date'
          />
        
          <FormTextarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder='Comment'
          />
      </FormInputsContainer>
    
        <FormButton  type="submit" width="166px" height="56px">Send</FormButton>
        
    </FormContainer>
  );
};

export default BookingForm;


