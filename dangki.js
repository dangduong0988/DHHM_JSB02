const x = document.getElementById("GG");
console.log(x);
x.addEventListener("click", function() {
    const a = document.getElementById("password")
    const b = document.getElementById("email")
    const c = document.getElementById("repassword")
    if (a.value == "" && b.value == "" && c.value == "") {
        alert("Hãy nhập đầy đủ thông tin!");
    } else if (a.value == "") {
        alert("Bạn Chưa nhập password!!");
    } else if (b.value == "") {
        alert(" Bạn hãy nhập email hoặc số điện thoại!!");
    } else if (c.value == "") {
        alert(" Bạn hãy nhập lại password!!");
    } 
    else {
        alert("Đăng nhập thành công!!!!");
    }
});