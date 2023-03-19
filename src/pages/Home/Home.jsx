import { Typography, Card, CardContent,Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeStyle from "./Home.module.css";



  const data = [{
  id: 1, 
  title: "Италия",
  description: "Квиз про италию! Найди значимые места, отметь на карте. ",
  isPrivacy: true,
  quiz: [
    {quizName: "Колизей", location: "15.000, 24.556", qustion: "Где самый известый колизей?"},
    {quizName: "Trevi Fountain", location: "15.000, 24.556", qustion: "Где находится прекрасный фонтан в Италии?"},
    {quizName: "Музей", location: "15.000, 24.556", qustion: "Это главный музей страны"},
    {quizName: "Храм", location: "15.000, 24.556", qustion: "Самый большой храм"},
  ]},{
    id: 1, 
    title: "Италия",
    description: "Квиз про италию! Найди значимые места, отметь на карте. ",
    isPrivacy: true,
    quiz: [
      {quizName: "Колизей", location: "15.000, 24.556", qustion: "Где самый известый колизей?"},
      {quizName: "Trevi Fountain", location: "15.000, 24.556", qustion: "Где находится прекрасный фонтан в Италии?"},
      {quizName: "Музей", location: "15.000, 24.556", qustion: "Это главный музей страны"},
      {quizName: "Храм", location: "15.000, 24.556", qustion: "Самый большой храм"},
    ]},{
      id: 1, 
      title: "Италия",
      description: "Квиз про италию! Найди значимые места, отметь на карте. ",
      isPrivacy: true,
      quiz: [
        {quizName: "Колизей", location: "15.000, 24.556", qustion: "Где самый известый колизей?"},
        {quizName: "Trevi Fountain", location: "15.000, 24.556", qustion: "Где находится прекрасный фонтан в Италии?"},
        {quizName: "Музей", location: "15.000, 24.556", qustion: "Это главный музей страны"},
        {quizName: "Храм", location: "15.000, 24.556", qustion: "Самый большой храм"},
      ]}]
  



function Home() {

  return(
    <div className={homeStyle.HomeStyle}>

        <Typography variant="h1" sx={{mt: 4}}> Выберите квиз </Typography>
        <Typography variant="subtitle1" gutterBottom>
        Для начала игры нажмите  {<b>Начать</b>}
        </Typography>
    
        <div className={homeStyle.divstyle}>
        {data.map((game, index)=>
          <Card id={index} className={homeStyle.cardstyle} variant="outlined"  sx={{my: 4}}>
            <CardContent sx={{p:4}}>
              <Typography variant="h3"> {game.title}</Typography>
              <Typography variant="h5" sx={{my: 1}}> {game.description}</Typography>
              <Button  className={homeStyle.styleLink} sx={{my: 1}} variant="contained">
              <Link to={"/game/"+game.id}>Начать</Link> 
              </Button>
            </CardContent>           
          </Card>
        )}
       </div>
       
    </div>
  );
}

export default Home;
