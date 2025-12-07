import supabase from "./config.js";

let myFile = document.getElementById("myfile");
let uFile = document.getElementById("uploadF");
let cards = document.getElementById("cards"); // yeh card images ko show krwane kliye
let edtFile = document.getElementById("edtFile");
let myPulic;
let imageUrl;
let upImgUrl

// _____________________ New file Upload_______________________________
async function uploadFile() {
  const fileName = myFile.files[0].name;
  const file = myFile.files[0];
  console.log(myFile.files[0]?.name);



  //  _________________ 1.Upload picture in storage______________________
  const { data, error } = await supabase.storage
    .from("profiles")
    .upload(fileName, file);
    // ____________________ 2. if data uploaded we have to get public url__________________
  if (data) {
    var FileData = data.fullPath.split("/");
    console.log(FileData[1]);
    myPulic = FileData[1];

    console.log(myPulic);

    const { data: myData } = supabase.storage
      .from("profiles")
      .getPublicUrl(myPulic);

    console.log(myData.publicUrl);
    if (myData) {
      imageUrl = myData.publicUrl;
      const { error } = await supabase
        .from("userPics")
        .insert({ image: imageUrl });
    }
    if (error) {
      console.log(error);
    } else {
      alert("picture uplaoded suc");
    }
  } else {
    console.log(error);
  }
}

uFile.addEventListener("click", uploadFile);

// ________________________________to show image from database 
async function showImage (){
  cards.innerHTML = ''
   const { data, error } = await supabase
  .from('userPics')
  .select('*')
  if(data){
    data.forEach(card => {
      console.log(card);
      
       cards.innerHTML += `<div><img src="${card.image}" class="card-img-top" alt="...">
        <button class="btn btn-primary" onClick='startEdt(${card.id},"${card.image}")'>edit</button>
    
  </div>`
    });
    
  }
}


showImage()

window.startEdt = (id,imgUrl)=>{
 edtFile.click()
 console.log(imgUrl.split('/profiles/')[1]);
//  https://shxycwgpulaaykxfkpwd.supabase.co/storage/v…bject/public/profiles/Mens-T-shirt-Mockup-PSD.jpg
 //img url == overall url (get name for this purpose we used split method (split('/profiles/)))
window.changeName = imgUrl.split('/profiles/')[1]
window.imgId = id
 
}

edtFile.addEventListener('change',async (e)=>{
  console.log(changeName,imgId);
  
  console.log(e.target.files[0]);
  const { data, error } = await supabase
  .storage
  .from('profiles')
  .remove([changeName])

  if(error){
    console.log('error',error);
    
  }
  
  const newFile = e.target.files[0]
  const newFileName =e.target.files[0].name
const { data:updData, error :updErr } = await supabase
  .storage
  .from('profiles')
  .upload(newFileName, newFile, {
    upsert: true
  })
  if(updData){
    //for public url we have to use file name so we added aplit function here
       var FileData = updData.fullPath.split("/");
    console.log(FileData[1]);
    upImgUrl = FileData[1]; // store in new variable  for data


    // ________________________ to get public url ___________
  const { data:newPubUrl} = supabase
  .storage
  .from('profiles')
  .getPublicUrl(upImgUrl)

  if(newPubUrl){
    const { error } = await supabase
  .from('userPics')
  .update({ image: newPubUrl.publicUrl })
  .eq('id', imgId)  // window variable hai yeh jo click p bnaya tha
  }
  showImage()
  }else{
    console.log(updErr);
    
  }



  
})