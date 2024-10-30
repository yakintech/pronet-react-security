import { Button } from '@mui/material'
import React from 'react'


interface PButtonProps extends React.ComponentProps<typeof Button> {
    category: "primary" | "secondary"
}



function PButton(props: PButtonProps) {

    if(props.category === "primary") {
        return <Button variant="contained" {...props} />
    }
    return <Button variant="outlined" {...props} />
}

export default PButton