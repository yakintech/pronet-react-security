import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Add from './add'
import Detail from './detail'
import List2 from './list/List2'

function ProductRoutes() {
    return <>
        <Routes>
            <Route path='' element={<List />} />
            <Route path='add' element={<Add />} />
            <Route path=':id' element={<Detail />} />
            <Route path='list2' element={<List2  />} />
        </Routes>
    </>
}

export default ProductRoutes