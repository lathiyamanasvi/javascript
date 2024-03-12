let data =[]

const submitt = () => {
   let email =  document.getElementById('email').value
   let password =  document.getElementById('password').value
   let id =  document.getElementById('id').value

    let obj ={
        id :Math.floor(Math.random()*10000),
        email : email,
        password : password,
    }
    if(id){
        let rec = JSON.parse(localStorage.getItem('user'));
        let update = rec.map((val)=>{
            if(val.id == id){
                val.email = email,
                val.password = password
            }
            return val;
        })
        console.log(update);
        localStorage.setItem('user',JSON.stringify(update))
        View();
    }
    else{
        if(localStorage.getItem('user')=== null || localStorage.getItem('user') === undefined){
            data.push(obj);
            localStorage.setItem('user',JSON.stringify(data))
        }
        else{
            let old = JSON.parse(localStorage.getItem('user'));
            old.push(obj);
            localStorage.setItem('user',JSON.stringify(old))
        }
      
        document.getElementById('email').value = ""
        document.getElementById('password').value = ""
        View();
        console.log(update);
    }

}
const View = () => {
    let record = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    let tbl = ""
    record.map((val)=>{
            tbl +=`
                <tr>
                    <td>${val.id}</td>
                    <td>${val.email}</td>
                    <td>${val.password}</td>
                    <td><button onClick="deletedata(${val.id})">Delete</button></td>
                    <td><button onClick="Editdata(${val.id})">Edit</button></td>
                </tr>
            `
        
    })
    document.getElementById('record') .innerHTML=tbl
}
View();

const deletedata = (id) => {
    let all = JSON.parse(localStorage.getItem('user'));
    let ans = all.filter((val)=>{
        return val.id != id;
    })
    localStorage.setItem('user',JSON.stringify(ans));
    alert("Succesfully Delete");

    View();
}
const Editdata =(id)=>{
    let all = JSON.parse(localStorage.getItem('user'));
    let up = all.filter((val)=>{
        return val.id == id
    })

    document.getElementById("id").value = up[0].id                                  
    document.getElementById('email').value=up[0].email
    document.getElementById('password').value=up[0].password

    View();
}