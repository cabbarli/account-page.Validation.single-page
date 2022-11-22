function yoxla(){
let  pass, email;
email=document.getElementById("email").value; 
pass=document.getElementById("password").value; 
if( email == ""){
  alert("xahiş edirik email xanasını boş buraxmayın");
}else if(pass == ""){
  alert("xahiş edirik password xanasını boş buraxmayın");
}else if(pass.length <= 5){
  alert("xahiş edirik 5 xanadan yuxari şifrə yazın");
}else if(pass.length >= 14){
  alert("xahiş edirik 14 xanadan az sayıda şifrə yazın");
}
	let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
	if (regex.test(email)==true)
	{alert("keçərli email adresi");}
	else
	{alert("Mail adresinizi düzgün yazın!");}
	
}