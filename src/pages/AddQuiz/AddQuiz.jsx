import React, { useState, useEffect } from "react";

import AddIcon from '@mui/icons-material/Add';

import {Typography, TextField, Button } from "@mui/material";

import apStyle from "./AddQuiz.module.css";
import { textAlign } from "@mui/system";



function AddQuiz() {
  const [formData, setFormData] = useState([
    {
    id: 1, 
    title: "Италия",
    description: "Квиз про италию!",
    isPrivacy: true,
    quiz: [
      {quizName: "Колизей", location: "15.000, 24.556", qustion: "Где самый известый колизей?"},
      {quizName: "Trevi Fountain", location: "15.000, 24.556", qustion: "Где находится прекрасный фонтан в Италии?"},
      {quizName: "Музей", location: "15.000, 24.556", qustion: "Это главный музей страны"},
      {quizName: "Храм", location: "15.000, 24.556", qustion: "Самый большой храм"},
    ]
    },

  ]);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quiz, setQuiz] = useState([{quizName: "", location: "", qustion:""}]);


  
  // useEffect(() => {
  //    console.log("asd")
  // }, [formData]); 
  
    function FormSubmit(e){
        e.preventDefault()
        console.log(quiz.quizName)
        const newPost = {
        
            id: Math.round(Date.now() + Math.random()),
            isPrivacy: true,
            title, description,
            quiz: [{...quiz}],

        }
        

       setFormData([...formData, newPost])

       setTitle("")
       setDescription("")
       setQuiz(quiz => ({...quiz, quizName: ""}))
       setQuiz(quiz => ({...quiz, location: ""}))
       setQuiz(quiz => ({...quiz, qustion: ""}))
       
     
    }

    const PostsName = formData.map((post, index) => 
  
        <div key={index} className={apStyle.niceBorderCard}>
            <Typography sx={{py:1,pl:3}} variant="h3" >{index + 1 + ". "} {post.title}</Typography>
            <Typography sx={{pb:2, pl:3}} variant="h5">{post.description}</Typography>
            {formData[index].quiz.map((post, index)=>
              <div className={apStyle.niceBorderQuiz}>
                <Typography variant="h4"  sx={{mt: 1}}>{post.quizName}</Typography>
                <Typography variant="subtitle1"  sx={{mt: 1}}>Вопрос: {post.qustion}</Typography>
                <Typography variant="subtitle2"  sx={{mt: 1}}>Координаты: ({post.location})</Typography>
              </div>   
            )}
       
        </div>
        
      );
   
  return (
    <div >
      <div className={apStyle.AddQuiz}>
        <form className={apStyle.niceBorder} onSubmit={FormSubmit}>
          <Typography variant="h2"  sx={{mt: 1}}> Добавить квиз</Typography>
            <TextField sx={{m: 1}} value={title} required id="standard-basic" label="Title" variant="standard"
                onChange={(e)=>{
                setTitle(e.target.value);
                }}
            />
            <TextField sx={{m: 1}} value={description} required id="standard-basic" label="Description" variant="standard"
                onChange={(e)=>{
                  setDescription(e.target.value);
                }}
            />
          <Typography variant="h6"  sx={{mt: 2}}>Вопрос №1</Typography>
            <TextField sx={{m: 1}} value={quiz.quizName} required id="standard-basic" label="quizName" variant="standard"
                onChange={(e)=>{
                setQuiz(quiz => ({...quiz, quizName: e.target.value}));
                }}
            />
            <TextField sx={{m: 1}} value={quiz.location} required id="standard-basic" label="location" variant="standard"
                onChange={(e)=>{
                  setQuiz(quiz => ({...quiz, location: e.target.value}));
                }}
            />
            <TextField sx={{m: 1}} value={quiz.qustion} required id="standard-basic" label="qustion" variant="standard"
                onChange={(e)=>{
                  setQuiz(quiz => ({...quiz, qustion: e.target.value}));
                }}
            />
         {/*  */}
         <Typography variant="h6"  sx={{mt: 2}}>Вопрос №2</Typography>
            <TextField sx={{m: 1}}  id="standard-basic" label="quizName" variant="standard"
                
            />
            <TextField sx={{m: 1}}  id="standard-basic" label="location" variant="standard"
                
            />
            <TextField sx={{m: 1}}  id="standard-basic" label="qustion" variant="standard"
                
            />
         {/*  */}
         <br />   
             <Button type="button"  sx={{mt: 3}} variant="contained">
             <AddIcon /> 
            </Button> 
          <br />
            <Button type="submit" sx={{mt: 3}} variant="contained">
              Создать 
            </Button>
        </form>
      
      </div>
      <div>  
        {PostsName}
      </div>
    </div>
  );
}

export default AddQuiz;
