const express = require('express');
const res = require('express/lib/response');
const mid1 = require('./Middlewares/Middleware_1');
const mid2 = require('./Middlewares/Middleware_2');

const app = express();

app.use(express.json());
app.use(mid1);
app.use(mid2);

const port = process.env.PORT ||3005

let courses = [{id:1, name :'python'},
                 {id:2, name :'java'},
                 {id:3, name :'javascript'},
                 {id:4, name :'dbms'},
                 {id:5, name :'capm'}
]

// app.get is for READ operations
app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/course', (req,res) => {
  res.send('Welcome to JavaScript Course')
})

app.get('/courses', (req, res) => {
  res.send(courses);
})

//route parameters
// app.get('/course/:id', (req, res) => {
//   res.send(req.params)
// })

app.get('/course/:name', (req, res) => {
  //console.log(req.params.name)
 let cour = courses.find(course => course.name === req.params.name)
 if(!cour) res.status(404).send('There is No Course as mentioned!')
 res.send(cour);
})


//app.post is for CREATE operations

app.post('/courses', (req, res) => {
  const course = {
    id: courses.length + 1,
    name : req.body.name
  };

  courses.push(course);

})

//app.put is for UPDATE operations

app.put('/course/:name', (req, res) =>{

  let cour = courses.find(course => course.name === req.params.name)
  if(!cour) res.status(404).send('There is No Course as mentioned!')

    cour.name = req.body.name;
    res.send(cour);

})

//app.delete is for DELETE operations

// app.delete('/course/:name', (req, res) => {

//  let UpdatedCourses = courses.filter(course => course.name !== req.params.name)
//  courses = UpdatedCourses

//  res.send(courses)

// })

app.delete('/course/:id', (req, res) => {
  let cour = courses.find(course => course.id === parseInt(req.params.id))
  if(!cour) res.status(404).send('There is No Course as mentioned!')

    let index = courses.indexOf(cour)

    courses.splice(index,1)
    res.send(courses)
})

app.listen(port)
