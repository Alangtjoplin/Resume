function main () {
    let x = 10;
    const y = 15;
    if (x > 5) {
        let x = 20;
        x=30;
        console.log("Inner x is "+x);
        console.log("Inner y is "+y);
        const bookname = {title: "Book "+x, author:" Author "+y};
        console.log("Inner Book Name: "+bookname.title);
        console.log("Inner Book Author: "+bookname.author);
    }
    const bookname = {title: "Book "+x, author:" Author "+y};
    console.log("Outer Book Name: "+bookname.title);
    console.log("Outer Book Author: "+bookname.author);
    console.log("Outer x is "+x);
    console.log("Outer y is "+y);   
}
function add(a,b) {
    this.a = a;
    this.b = b;
    this.sum = this.a + this.b;
}
function emp(id,name,salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.changesalary = changesalary
    function changesalary(newsalary) {
        this.salary = newsalary;
    } 
}
function EightByEightDisplay(arrOfArr){
    for(let k=0;k<8;k++){
        let row = "";
        for(let i=0;i<8;i++){
            row += arrOfArr[k][i]+" "
        }
        console.log(row+"\n");
    }   
}
function validateForm() {
  
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    var isValid = true;
   
    if (name == "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById("nameError").innerHTML = "Name must be at least 3 characters";
        isValid = false;
    }
    
    
    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email";
        isValid = false;
    }
    
    
    if (password == "") {
        document.getElementById("passwordError").innerHTML = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }
    

    if (isValid) {
        alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email);
        console.log("Form Data:");
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Password: " + password);
        return true;
    } else {
        return false;
    }
}

try {
    console.log("Form validation script loaded");
    var form = document.getElementById("myForm");
    if (form) {
        console.log("Form found successfully");
    }
} catch (err) {
    console.log("Error: " + err.message);
}


