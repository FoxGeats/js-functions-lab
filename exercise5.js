fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.reduce((pre,item)=>
    {
      item.completed ? pre : pre.push({userid:item.userId,title: item.title})
      return pre; 
},[]);
    
        console.log(uncompleted);
    
  })
  .catch(function(err) { 
    console.log(err);
  });