const express = require('express');
const app = express();
const PORT = 3000;


const boards = [
  {id:1,title:"i am a title1",stage:1},
  {id:2,title:"i am a title2",stage:2},
  {id:3,title:"i am a title3",stage:3},
  {id:4,title:"i am a title4",stage:4},
]

app.get('/api/boards',(req,res)=>{
     res.send([1,2,3,4]);
});
app.get('/api/boards/:id',(req,res)=>{
  const board= boards.find(c=> c.id===parseInt(req.params.id));
  if(!board) res.status(404).send('The board with the given id was not found ');
  res.send(board);

});

app.post('/api/boards',(req,res)=>{
  if(req.url===title){
    res.send(req.body.id)
    res.send(req.body.stage)
    res.status(201).send('201 status code....')
  };
    const board = {
      title:req.body.title,
    };
    boards.push(board);
    res.send(board);
  });
  app.put('/api/courses/:id',(req,res)=>{
    const board= boards.find(c=> c.id===parseInt(req.params.id));
    if(!board)  return res.status(400).send('The course with the given id was not found ');
   
    
    board.stage=req.body.stage;
    res.send(board);
  });
  
  
  app.delete('/api/courses/:id',(req,res)=>{
     
    
    const course= courses.find(c=> c.id===parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given id was not found ');
    const index = courses.indexOf(course);
    res.send(course);
});


const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Server listen on port ${port}`));