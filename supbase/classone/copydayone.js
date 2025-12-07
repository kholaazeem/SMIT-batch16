import supabase from "./config.js";

let myFile = document.getElementById('myfile')
let uFile = document.getElementById('uploadF')
let getImage = document.getElementById('getimage')
let imageDi = document.getElementById('image')
let myPulic;


async function uploadFile (){
    const fileName = myFile.files[0].name
    const file = myFile.files[0]
    console.log(myFile.files[0]?.name);
   
const { data, error } = await supabase
  .storage
  .from('profiles')
  .upload(fileName, file)
  if(data){
  var FileData= data.fullPath.split('/')
  console.log(FileData[1])
    myPulic = FileData[1]
    
    console.log(myPulic);
    
     
    const { data :myData } = supabase
  .storage
  .from('profiles')
  .getPublicUrl(myPulic)
  // if(myData){
  //   console.log(myData.publicUrl);
  //     imageDi.src = myData.publicUrl
  //     imageDi.style.width = '300px'
    
  // }

  
  
    
  }else{
    console.log(error);
    
  }
 

    
}




uFile.addEventListener('click' ,uploadFile)


