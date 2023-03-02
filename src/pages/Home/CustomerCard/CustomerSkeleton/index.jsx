import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import style from '../customerCard.module.css'

export default function CustomerSkeleton() {
  return (
        <div className={style.cardContainer}>
            <Skeleton variant="rectangular" width={"80%"} height={"400px"} sx={{borderRadius: "20px"}}/>
        </div>
    
  );
}