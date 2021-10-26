const todos = [
  {text: 'Feed llama', done: true, _id: 125223},
  {text: 'Sleep under the stars', done: false, _id: 127904},
  {text: 'Buy milk', done: false, _id: 139608},
]

// Todos.find({}, function(error, ){
  //
//})

const find = (conditions, callback) => {
  try {
    // try the code here
    //make sure that conditions is an object
    if (!(conditions instanceof Object)) {
      throw new TypeError("Please pass in an object")
    }
    // if
    if(Object.keys(conditions).length === 0) {
      return callback(null, todos)
    }


  } catch (error) {
    // if there are errors, run this code
    console.log(error)
    callback(error, [])
  }
}

export {
  find
}