import React from 'react';

import {
  Button,
  Heading,
  Box,
  Flex,
  Card
} from 'rebass'

import {
  Label,
  Input
} from '@rebass/forms'

export default function SetDetailsFrom(props) {
  const { 
    handleInputChange, 
    prevStep, 
    nextStep, 
    setName, 
    setSymbol 
  } = props;
  
  return (
    <div>
      <Heading>Enter Set Details</Heading>
      <Box as='form' onSubmit={e => e.preventDefault()}>
        
        <Label>Token Name</Label>
        <Input type='text' value={setName} onChange={handleInputChange('setName')} required/>
        <Label>Token Symbol</Label>
        <Input type='text' value={setSymbol} onChange={handleInputChange('setSymbol')} required/>

        <Flex sx={{justifyContent:'space-around', minWidth:'300px', margin: '30px', padding: [3,0,0,3]}}>
        <Button onClick={prevStep}>Previous</Button>
        <Button onClick={nextStep}>Next</Button>
        </Flex>
      </Box>
    </div>
  )
}