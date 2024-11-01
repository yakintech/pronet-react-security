import { Button } from '@mui/material'
import React, { useState } from 'react'
import { queryClient } from '../..'
import axios from 'axios'

function Home() {


  const [selectedFile, setselectedFile] = useState<any>(null)

  const clearCache = () => {
    queryClient.removeQueries({
      queryKey: ['orders', "products"]
    })
  }


  const handleFileChange = (e: any) => {
    //dosya tipi kontrolü yapılmalı. (jpeg, png, jpg)
    if (e.target.files.length > 0) {
      if (e.target.files[0].type !== 'image/jpeg' && e.target.files[0].type !== 'image/png') {
        alert('Dosya tipi jpeg veya png olmalıdır.')
        return
      }

      //dosya boyutu kontrolü yapılmalı. (max 1mb)
      if (e.target.files[0].size > 1024 * 1024) {
        alert('Dosya boyutu 1mb dan büyük olamaz.')
        return
      }
    }

    setselectedFile(e.target.files[0])
  }

  const handleUpload = () => {

    const formData = new FormData()
    formData.append('file', selectedFile)

    axios.post('http://localhost:3002/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      alert('Dosya yüklendi.')
    }).catch(err => {
      alert('Dosya yüklenirken hata oluştu.')
    })
  }

  return <>

    {/* <Button onClick={clearCache} variant="contained" color="primary">Clear Cache</Button> */}

    <hr />
    <div>
      <label htmlFor="">File:</label>
      <input type='file' onChange={handleFileChange} />
    </div>
    <hr />
    <div>
      <Button onClick={handleUpload} variant="contained" color="primary">Upload</Button>
    </div>

  </>
}

export default Home