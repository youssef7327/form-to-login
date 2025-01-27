let btn = document.getElementById('btn');
let user = document.getElementById('user');
let pass = document.getElementById('pass');
let h3 =document.getElementById('h3')


 btn.onclick = function click(){
    let re_user = user.value;
    let re_pass = pass.value;

    if (re_user=='1' & re_pass =='1' ){
        document.location.assign('#' )
    }
    else{
        h3.innerHTML='eror in user name or passsowrd'
    }
   // document.location.reload()
}
