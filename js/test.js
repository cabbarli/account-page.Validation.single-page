function yoxla(){
let  pass, email;
email=document.getElementById("email").value; 
pass=document.getElementById("password").value; 
let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
if( email == ""){
  alert("xahiş edirik email xanasını boş buraxmayın");
 return false;
}else if(pass == ""){
  alert("xahiş edirik password xanasını boş buraxmayın");
  return false;
}else if(pass.length <= 5){
  alert("xahiş edirik 5 xanadan yuxari şifrə yazın");
  return false;
}else if(pass.length >= 14){
  alert("xahiş edirik 14 xanadan az sayıda şifrə yazın");
  return false;
}
else if (regex.test(email)==false)
	{alert("Mail adresinizi düzgün yazın!");
	return false;
}
else {
	return true;
}
}