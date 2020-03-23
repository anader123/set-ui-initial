import React, { useState, useEffect } from 'react';

import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Button,
  Link
} from 'rebass'

export default function TokenBox(props) {
  const { token, addToken, removeToken, setDetails } = props;
  const [selected, setSelected] = useState(false);

  useEffect(() => {
		if(setDetails.findIndex(i => i.name === token.name) !== -1) {
      setSelected(true);
    }
  })
  
  return (
    <Box width={256}>
      <Card
        onClick={() => {
          if(selected === false) {
            addToken(token.name, token.symbol, token.address, token.image);
            setSelected(true);
          }
          else {
            const tokenIndex = setDetails.findIndex(i => i.name === token.name)
            removeToken(tokenIndex);
            setSelected(false);
          }
        }}
        sx={!selected ?
          {
              ':hover': {
                  backgroundColor: '#F4F4FA',
                  transition: '200ms',
                  transform: 'scale(1.08)',
                  width: 'auto'
                  },
          p: 1,
          transition: '300ms',
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          height: '175px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          cursor: 'pointer'
          }
          :
          {
          backgroundColor: '#F4F4FA',
          transform: 'scale(1.08)',
          width: 'auto',
          p: 1,
          transition: '300ms',
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          height: '175px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          cursor: 'pointer'
          }}>
          <Image alignSelf={'center'} width={60} height={60} src={token.image} />
        <Box px={2}>
          <Heading as='h5'>
              {token.symbol}
          </Heading>
          <Text fontSize={0}>
              {token.name}
          </Text>
        </Box>
      </Card>
    </Box>
  )
}
