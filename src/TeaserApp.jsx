import React from 'react'
import { AppTheme } from './theme'
import { Typography } from '@mui/material'
import { CardBasic } from './components/Card/CardBasic'
import MediaCard from './components/MediaCard/MediaCard'
import ComplexCard from './components/ComplexCard/ComplexCard'

export const TeaserApp = () => {
  return (
    <>
        <AppTheme>
            <Typography variant='h3'>All cards were made with Material UI</Typography>
            <Typography variant='subtitle2'>This project was made with React + Vite. I create three card components and, it were added into TeaserApp page</Typography>
            <Typography variant="h4">Basic Card</Typography>
            <CardBasic></CardBasic>
            <hr></hr>
            <Typography variant="h4">Media Card</Typography>
            <MediaCard></MediaCard>
            <hr></hr>
            <Typography variant="h4">Complex Card with description</Typography>
            <ComplexCard></ComplexCard>
        </AppTheme>
        
    </>
  )
}
