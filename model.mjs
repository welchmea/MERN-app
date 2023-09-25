import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const vitamin_db = mongoose.connection;


// Confirm that the database has connected and print a message in the console.
vitamin_db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Internal Server Error. The server was unable to process this request.' });
    } else  {
        console.log('You have successfully connected to MongoDB Vitamins collection using Mongoose.');
    }
});

const vitaminSchema = mongoose.Schema({
	name:      { type: String, required: true },
	date:     { type: Date, required: true, default:Date.now },
	purpose:       { type: String, required: true },
    unit_day:        { type: Number, required: true },
});

const Vitamin = mongoose.model('Vitamins', vitaminSchema);

const createVitamin = async (name, date, purpose, unit_day) => {
    const vitamins = new Vitamin({ 
        name:name,
        date:date,
        purpose:purpose,
        unit_day:unit_day,
    });
    return vitamins.save();
}

const retrieveVitamins = async () => {
    const query = Vitamin.find();
    return query.exec();
}

const retrieveVitaminByID = async (_id) => {
    const query = Vitamin.findById({_id: _id});
    return query.exec();
}

const deleteVitaminById = async (_id) => {
    const result = await Vitamin.deleteOne({_id: _id});
    return  result.deletedCount;
};

const updateVitamin = async (_id, name, date, purpose, unit_day) => {
    const result = await Vitamin.replaceOne({_id: _id }, {
        name:name,
        date:date,
        purpose:purpose,
        unit_day:unit_day,
    });
    return { 
        name:name,
        date:date,
        purpose:purpose,
        unit_day:unit_day, 
    }
}

export { createVitamin, retrieveVitamins, retrieveVitaminByID, updateVitamin, deleteVitaminById }