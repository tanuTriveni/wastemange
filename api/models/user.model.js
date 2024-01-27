import mongoose from "mongoose";
// creating the schema
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    
    }
    
},{timestamps:true})
const User=mongoose.model('User' , userSchema)

export default User;



























// Certainly, let's go into more detail about each part of the code:

// ```javascript
// import mongoose from "mongoose";

// // creating the schema
// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// }, { timestamps: true });

// const User = mongoose.model('User', userSchema);

// export default User;
// ```

// 1. **Importing Mongoose:**
//    - `import mongoose from "mongoose";`: This line imports the Mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. Mongoose simplifies the interaction with MongoDB by providing a structured way to define schemas and models.

// 2. **Creating the Schema:**
//    - `const userSchema = new mongoose.Schema({ ... }, { timestamps: true });`: This code defines a Mongoose schema for a user. Let's break down the schema definition:
//      - `username`, `email`, and `password` are fields in the user document.
//      - `type: String` indicates that the data type of these fields is a string.
//      - `required: true` specifies that these fields are required and must be present in each user document.
//      - `unique: true` ensures that each `username` and `email` must be unique in the collection.
//      - `{ timestamps: true }` adds two fields (`createdAt` and `updatedAt`) to the schema automatically, providing information about when a document was created or last updated. These fields are managed by MongoDB itself.

// 3. **Creating the Model:**
//    - `const User = mongoose.model('User', userSchema);`: This line creates a Mongoose model named `User`. A model is a constructor function that corresponds to a collection in the database. The model provides an interface to interact with the database, allowing you to create, read, update, and delete documents in the collection.

// 4. **Exporting the Model:**
//    - `export default User;`: This line exports the `User` model so that it can be imported and used in other parts of your application. By exporting the model, you make it accessible to other files that may need to interact with the MongoDB collection associated with this model.

// In summary, this code sets up a Mongoose schema defining the structure and constraints of a user document. It then creates a Mongoose model based on this schema, providing an interface to interact with the MongoDB collection of users. Finally, the model is exported for use in other parts of the application.
//