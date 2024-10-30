import { Button } from '@mui/material'
import React from 'react'
import { queryClient } from '../..'

function Home() {
  
  const clearCache = () => {
    queryClient.removeQueries({
      queryKey: ['orders',"products"]
    })
  }

  return <>
    <div>index</div>
    <Button onClick={clearCache} variant="contained" color="primary">Clear Cache</Button>
  </>
}

export default Home