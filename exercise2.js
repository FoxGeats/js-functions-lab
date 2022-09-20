fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todoTitle = json.map(todo => todo.title);
    
        console.log(todoTitle)
    
  })
  .catch(function(err) { 
    console.log(err);
  });