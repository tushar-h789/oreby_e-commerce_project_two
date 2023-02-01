import Container from '../components/layout/Container'
import React from 'react'
import Breadcrumb from '../components/layout/Breadcrumb'
import InputBox from '../components/layout/InputBox'
import Button from '../components/layout/Button'

const Contacts = () => {
  return (
    <Container>
        <Breadcrumb/>
        <div className='mb-6'>
            <h2 className='font-dm font-bold text-4xl mb-10'>Fill up a Form</h2>
            <InputBox as="input" placeholder="Your Name here" title="Name"/>
            <InputBox as="input" placeholder="Your Email here" title="Email"/>
            <InputBox as="textarea" placeholder="Your Messege here" title="Messege"/>

            <Button title="Post"/>
        </div>
    </Container>
  )
}

export default Contacts