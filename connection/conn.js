import mongoose from "mongoose";

const conn = () => {mongoose.connect('mongodb+srv://vimmac:sxe7uEEhWynBXF8O@cluster0.fkskz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        dbName: 'filmes'
    }
    ).then( () => {console.log("Mongodb connected")}
    ).catch( (err) => {
        return console.log(`Connection to database failed  ${err}`)
    });

};

export default conn;
