import 'dotenv/config';
import express from 'express';
import * as vitamins from './model.mjs';
import path from 'path';

const PORT = process.env.PORT;
const app = express();
app.use(express.json()); 

if(process.env.NODE_ENV === 'production'){    
    app.use(express.static('frontend/build'))  // set static folder 
    //returning frontend for any route other than api 
    app.get('*',(req, res)=>{     
        res.sendFile (path.resolve(__dirname,'frontend','build',         
                      'index.html' ));    
    });
  }

app.post ('/VitaminPage', (req,res) => { 
    vitamins.createVitamin(
        req.body.name, 
        req.body.date, 
        req.body.purpose,
        req.body.unit_day
        )
        .then(vitamin => {
            res.status(201).json(vitamin);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'The document was not able to be compiled, check parameters again.' });
        });
});

app.get('/VitaminPage', (req, res) => {
    vitamins.retrieveVitamins()
        .then(vitamin => { 
            if (vitamin !== null) {
                res.json(vitamin);
            } else {
                res.status(404).json({ Error: 'The resource you are trying to locate does not exist.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The document was not able to be compiled, check parameters again.' });
        });
});

app.get('/VitaminPage/:_id', (req, res) => {
    vitamins.retrieveVitaminByID(req.params._id)
    .then(vitamin => { 
        if (vitamin !== null) {
            res.json(vitamin);
        } else {
            res.status(404).json({ Error: 'The resource you are trying to locate does not exist.'  });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The document was not able to be compiled, check parameters again.' });
    });

});

app.put('/VitaminPage/:_id', (req, res) => {
    vitamins.updateVitamin(
        req.params._id, 
        req.body.name, 
        req.body.date, 
        req.body.purpose,
        req.body.unit_day
    )
    .then(vitamin => {
        res.json(vitamin);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Document was not able to be compiled, check parameters again.' });
    });
});

app.delete('/VitaminPage/:_id', (req, res) => {
    vitamins.deleteVitaminById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error:'The resource you are trying to locate does not exist.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Document was not able to be compiled, check parameters again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});