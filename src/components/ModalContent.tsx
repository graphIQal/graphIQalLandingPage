import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';

import React from 'react';
export const PricingContent = (onClose: any) => {
  return (
    <ModalContent>
      <ModalHeader>Pricing</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text fontWeight='normal' mb='1rem'>
          We're still in beta, so we want your feedback!{' '}
          <span className='font-semibold'>graphIQal is free :)</span>
        </Text>
      </ModalBody>

      <ModalFooter>
        <Button bg='#2F3C7E' mr={3} onClick={onClose} color='white'>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

export const ContactContent = (onClose: any, state: any, handleSubmit: any) => {
  if (state.succeeded) {
    return (
      <ModalContent>
        <ModalHeader>Thank you for contacting us!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>We hope to get in touch soon.</div>
        </ModalBody>
        <ModalFooter>
          <Button bg='#2F3C7E' onClick={onClose} color='white'>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    );
  }
  return (
    <ModalContent>
      <ModalHeader>Contact Us</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <ModalBody>
            <FormLabel>Full name</FormLabel>
            <Input id='name' name='name' className='mb-3' />
            <FormLabel>Email address</FormLabel>

            <Input id='email' type='email' name='email' className='mb-3' />
            <FormLabel>Message</FormLabel>
            <Textarea
              id='message'
              name='message'
              placeholder="Let us know what's on your mind :)"
            />
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type='submit' bg='#2F3C7E' color='white'>
              Submit
            </Button>
          </ModalFooter>
        </FormControl>
      </form>
    </ModalContent>
  );
};

export const GetContent = (
  onClose: any,
  stateForm2: any,
  handleSubmit2: any
) => {
  if (stateForm2.succeeded) {
    return (
      <ModalContent>
        <ModalHeader>You're in line!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>We'll reach out soon with updates.</div>
        </ModalBody>
        <ModalFooter>
          <Button bg='#2F3C7E' onClick={onClose} color='white'>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    );
  }
  return (
    <ModalContent>
      <ModalHeader>Get graphIQal</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={handleSubmit2}>
        <FormControl isRequired>
          <ModalBody>
            <div className='mb-3'>
              Leave your email below to join the waitlist!
            </div>
            <Input
              id='email'
              type='email'
              name='email'
              placeholder='Email Address'
              className='mb-3'
            />
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type='submit' bg='#2F3C7E' color='white'>
              Submit
            </Button>
          </ModalFooter>
        </FormControl>
      </form>
    </ModalContent>
  );
};
