import supabase from "./config.js";
//  data fetch (current user)
let username = document.getElementById('username')
async function UserFetch (){
    try{
    const { data, error } = await supabase.auth.getUser()
    console.log(data);
    
  if(data){
    username.innerHTML = data.user.user_metadata.Name
  }
    
    }catch(err){
        console.log(err);
        
    }
}
UserFetch()



let title = document.getElementById('title')
let priority = document.getElementsByName('priority')
let description = document.getElementById('description')
let addTodo = document.getElementById('addTodo')
let main = document.getElementById('main')







// ____________________________________________Data add (Insert)

async function _addTodo(){

  let selectedPriority;
   console.log(title.value);
   console.log(description.value);
   //for of loop (to iterate array)
   for(let p of priority){
    
     if(p.checked){
      selectedPriority = p.value
      
     }

    
   }
   if(!title.value && !description.value ){
  alert('plz fill all inputs');
  return 
   }

   try{

   const { error } = await supabase
.from('Todos')
.insert({ 

  title:title.value,
  priority:selectedPriority,
  description:description.value
 })
 if(error){
     alert("error in creating",error)
 }else{
  Swal.fire({
  title: "added",
  text: " data added successfully",
  icon: "success"
});
 }
   




}catch(err){
    alert('erorr in adding data-->', err)
   }
 
   
   

   
}





addTodo.addEventListener('click',_addTodo)


// ____________________________Fecth data from database


async function AllTodos (){
 try{

  const { data, error } = await supabase
  .from('Todos')
  .select('*') 
  // // filter
  // .select() 
  // .eq('priority', 'Hi')
  // console.log(data);
  
  if(data){
  
    
    return showAllTodos(data)
  }




 }catch(err){
  console.log(err);
  
 }
}
AllTodos()

async function showAllTodos(todos){
  main.innerHTML =''
todos.forEach((todo) => {
   main.innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${todo.title}</h5>
  
    <p class="card-text">${todo.description}</p>
    <a href="#" class="card-link">${todo.priority}</a>
       <br>
      <button class="btn" ><i class="fa-solid fa-pen-to-square"></i></button>
   
        <button class="btn " ><i class="fa-solid fa-trash"></i></button>
   
  </div>
</div>`
   
});
  
}



