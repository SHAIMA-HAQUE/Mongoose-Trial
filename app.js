const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitDB",{useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
  name : {
    type :String,
    required:[true,"Please check your data entry , no name specified"]
  },
  rating:{
    type:Number,
    min : 1,
    max : 10
  },
  review: String
})

const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit({
  // name : "Apple",
  rating : 6,
  review: "Peaches are great"
})
fruit.save();

// const kiwi = new Fruit({
//   name :"Kiwi",
//   rating: 10,
//   review : "Best Fruit in the World"
// })
//
// const orange = new Fruit({
//   name : "Orange",
//   rating : 10,
//   review : "Waiting for winter"
// })
//
// const banana = new Fruit({
//   name : "Banana",
//   rating :8,
//   review : "Ok..Ok"
// })

// Fruit.insertMany([kiwi,orange,banana],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved all the fruits");
//   }
// })

Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });

    }

  })

//Fruit.updateOne({_id :   },{name:"peach"},function(err){
// if(err){
//   console.log(err);
// }else{
//   console.log("Successfully updated the document");
// }
// })

// Fruit.deleteOne({ name :"Kiwi"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully deleted ");
//   }
// })

Fruit.deleteMany({name :"Apple"},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully deleted");
  }
})

const personSchema = new mongoose.Schema({
  name : String,
  age : Number,
  favouriteFruit : fruitSchema
})

const Person = mongoose.model("Person",personSchema);

const pineapple = new Fruit({
  name :"Pineapple",
  score : 9,
  review: "Great Fruit"
})
pineapple.save();
// const person = new Person({
//   name :"John",
//   age:37
// })

const person = new Person({
  name : "Amy",
  age :12,
  favouriteFruit :pineapple
})

person.save();
