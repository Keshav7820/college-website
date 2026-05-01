function login(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    auth.signInWithEmailAndPassword(email, pass)
    .then(()=>{
        if(role==="admin"){
            window.location="admin.html";
        }else{
            window.location="student.html";
        }
    })
    .catch(()=>alert("Login Failed"));
}