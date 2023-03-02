import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import style from '../tourCard.module.css'

export default function TourCardSkeleton() {
  return (
        <div className={style.cardContainer}>
            <Skeleton variant="rectangular" width={"100%"} height={"200px"} sx={{borderRadius: "20px"}}/>
            <Box>
                <Skeleton width="80%" height={"22px"}/>
                <Skeleton width="80%" height={"14px"}/>
                <Skeleton width="20%" height={"28px"}/>
            </Box>
        </div>
    
  );
}