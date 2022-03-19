import OutlineBox from 'elements/OutlineBox';
import { useEffect, useState, useRef } from 'react';
import { styled } from 'stitches.config';
import { SubmitButton } from './SubmitButton';
import TextArea from './TextArea';
import TextField from './TextField';
import RightArrow from 'public/images/icons/right_arrow.svg';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormContainer = styled('form', OutlineBox, {
  position: 'relative',
  width: '100%',
  background: '$secondary100',
  padding: '$11 $6',

  $$outlineColor: '$colors$secondary400',

  '@bp1': {
    padding: '$11 $10',
  },

  '> * + *': {
    marginTop: '$8',
  },
});

const Form = () => {
  const [formValues, setFormValues] = useState<{
    [key: string]: string;
  }>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const onChange = (e) => {
    setFormValues({ [e.target.name]: e.target.value });
  };

  const formRef = useRef();

  const onSubmit = (e) => {
    console.log('iliig bantu ');
    e.preventDefault();
    console.log({ formValues });

    axios
      .post('https://95n72qmuj7.execute-api.ap-south-1.amazonaws.com/form', {
        ...formValues,
        client: 'test2',
      })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Submitted!',
          text: 'Thanks for contacting Primefort! Someone from our team will reach out to you :)',
        });
      })
      .catch(() => {
        Swal.fire(
          'Something went wrong while submitting your form. Please try again later.'
        );
      });
  };

  return (
    <FormContainer ref={formRef} onSubmit={onSubmit}>
      <TextField
        id='name'
        label='Full Name'
        name='name'
        required
        placeholder='Enter your full name'
        onChange={onChange}
        value={formValues['name']}
      />

      <TextField
        id='email'
        type='email'
        label='Email'
        name='email'
        required
        placeholder='Enter your email address'
        onChange={onChange}
        value={formValues['email']}
      />
      <TextField
        id='subject'
        label='Subject'
        name='subject'
        required
        placeholder='Enter the subject of your message'
        onChange={onChange}
        value={formValues['subject']}
      />
      <TextArea
        id='message'
        label='Message'
        name='message'
        required
        placeholder='Type you message here...'
        onChange={onChange}
        value={formValues['message']}
      />
      <SubmitButton
        type='submit'
        text='Send Message'
        border
        icon={RightArrow}
        css={{
          transform: 'translateX(-50%)',
          left: '50%',
          position: 'relative',
          marginLeft: 'auto',
        }}
      />
    </FormContainer>
  );
};

export default Form;
