fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const number = json.reduce((pre,item)=>
    {
      return pre+item.completed;    
},0 );
    
        console.log(number)
    
  })
  .catch(function(err) { 
    console.log(err);
  });