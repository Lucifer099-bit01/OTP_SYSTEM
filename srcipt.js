console.log("connected");


let btn = document.querySelector(".btn-main");
let e_otp = document.querySelector("#input");
let toastbox = document.getElementById("toastBox");
let phno = document.getElementById("Phno");
function generateotp(){
    return Math.floor(1000+Math.random()*9000)
}
let correct_otp = generateotp();
function showToast(){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = "  Your Otp :  "  +  correct_otp;
    toastbox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    },6000)
}

function checkOtp(){
    let otp = document.querySelector("#input").value;
    if(otp === correct_otp.toString()){
        window.location.href = "KhanaKhazana.html"
    }
    else{
        alert("otp is incorrect")
        e_otp.value = "";
        btn.innerHTML = "Resend OTP";
    }
    
}

btn.addEventListener("click" , () => {
    if(phno.value === ""){
        return alert("enter Mobile number")
    } 
    else if(btn.innerHTML.includes("Send")){
        showToast();
        btn.innerHTML = "verify Otp"
        
    }
    else if(btn.innerHTML.includes("Resend")){
        correct_otp = generateotp();
        showToast();
        btn.innerHTML = "verify Otp"
        if(e_otp.value !== ""){
            checkOtp();
            e_otp.value = "";
        }
    }
    else if(e_otp.value === ""){
        return alert("Enter Otp Please")
    }
    
    else{
        checkOtp();
        e_otp.value = "";
    }
    
})

