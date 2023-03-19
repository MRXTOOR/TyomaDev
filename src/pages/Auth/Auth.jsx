import {React, useState} from "react";
import { Typography, Card, CardContent,Button,TextField } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function Auth () {

    const {email, setEmail} = useState("")
    const {password, setPassword} = useState("")

    return(
    <Card  className="RegAuthBox" variant="outlined"  sx={{my: 4}}>
    <CardContent sx={{p:4}}>
        <Typography variant="h2">Авторизация</Typography>
            <TextField sx={{m: 1}} value={email} required id="standard-basic" label="email" variant="standard"
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
            />
            <TextField sx={{m: 1}} value={password} required id="standard-basic" label="password" variant="standard"
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
            />
            <Button type="button"  sx={{mt: 3}} variant="contained" endIcon={<ArrowForwardIosIcon />}>
              Войти 
            </Button>
    </CardContent>           
    </Card>
    )
}

export default Auth;