import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { grid } from '@mui/system';
export const Commoncard = ({ title, description }) => {
    return (
        <Card sx={{
            minWidth: "377px", background: "linear-gradient(21.94deg, rgba(255, 255, 255, 0.064) -6.63%, rgba(110, 250, 235, 0.2) 85.24%)",
            borderRadius: "20px",

            /* Inside auto layout */
            height: '300px',
            flex: "none",
            order: "0",
            flexGrow: "0",
            maxHeight: "296px",
            padding: "21px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

        }}>
            <CardContent>
                <Typography sx={{ fontSize: "2rem", color: "#D0D4DE" }} >
                    {title}
                </Typography>
                <Typography variant="p" sx={{ color: "#FFFFFF", fontSize: "0.8rem", fontFamily: 'Plus Jakarta Sans' }}>
                    {description}
                </Typography>


            </CardContent>

        </Card>
    )
}
