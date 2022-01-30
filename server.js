const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuidv4');
const PORT = process.env.PORT || 3001;
var app = express();

var savedTasks = require('./db/db.json');

//Express usage
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Local port listening
app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);

//Get HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });

app.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, '/public/tasks.html'));
});

//Gets notes from JSON file
app.get('/api/tasks', (req, res) => {
    res.sendFile(path.join(__dirname, 'db/db.json'));
    console.log(`${req.method} request received to get tasks`);
});

//Posts (appends) notes to JSON file
app.post('/api/tasks', (req, res) => {
    // Create (persist) data
    console.info(`${req.method} request received to add a task`);

    const { title, details } = req.body;
      // If all the required properties are present
      if (title && details) {
        // Variable for the object we will save
        const newNote = {
          title,
          details,
          id: uuid4()
        };
    
        const response = {
          status: 'success',
          body: newTask,
        };
        //Adds new note to array
        savedTasks.push(newTask);
        //Writes new note to file
        fs.writeFile('db/db.json', JSON.stringify(savedTasks), function(err) {
            if (err) throw err;
        });
        //Response data console logged (ERR / NO ERR)
        console.log(response);
        res.status(201).json(response);
      } else {
        res.status(500).json('Error in posting task');
      }
    });

//Deletes notes on button press
app.delete('/api/tasks/:id', function (req, res) {
    res.send(`${req.method} request received to delete note`);
    console.log(`${req.method} request received to DELETE note`);

    const id = req.params.id;

    if (id) {
        savedTasks = savedTasks.filter(item => item.id !== id)

        fs.writeFile('db/db.json', JSON.stringify(savedTasks), function(err) {
            if (err) throw err;
            else {
                console.log(`Task ID: ${id} deleted`);
            }
        });
    }

    });

//When user types anything after / in URL, they are returned to homepage
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


