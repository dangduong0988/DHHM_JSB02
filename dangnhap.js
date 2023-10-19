const x = document.getElementById("GG");
console.log(x);
x.addEventListener("click", function() {
    const a = document.getElementById("password")
    const b = document.getElementById("email")
    if (a.value == "" && b.value == "") {
        alert("Hãy nhập đầy đủ thông tin!");
    } else if (a.value == "") {
        alert("Bạn Chưa nhập password!!");
    } else if (b.value == "") {
        alert(" Bạn hãy nhập email hoặc số điện thoại!!");
    } 
    else {
        alert("Đăng nhập thành công!!!!");
    }
});