var emailArray=[];
        var passwordArray=[];

        var SignInBox = document.getElementById("SignIn");
        var SignUpBox = document.getElementById("SignUp");
        var forgetBox = document.getElementById("Forgot");

        var SignInBox = document.getElementById("SignInTab");
        var SignUpBox = document.getElementById("SignUpTab");

        function SignUpFun(){
            event.preventDefault();

            SignUpBox.style.visibility="visible";
            SignInBox.style.visibility="hidden";
            forgetBox.style.visibility="hidden";


        }
        function SignInFun(){
            event.preventDefault();

            SignUpBox.style.visibility="hidden";
            SignInBox.style.visibility="visible";
            forgetBox.style.visibility="hidden";

            
        }
        function ForgotFun(){ 
            event.preventDefault();

            SignUpBox.style.visibility="hidden";
            SignInBox.style.visibility="hidden";
            forgetBox.style.visibility="visible";

         
        }


        function SignUp(){
            event.preventDefault();
            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;
            var passwordRetype = document.getElementById("srp").value;

            if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                passwordArray.push(password);

                alert(email + "  Thanks for registration. \nTry to login Now");

                document.getElementById("su").value;
                document.getElementById("se").value;
                document.getElementById("sp").value="";
                document.getElementById("srp").value="";
            }
            else{
                alert(email + " is already register.");
                return ;
          }
        }
        function SignIn(){
            event.preventDefault();

            var email = document.getElementById("si").value;
            var password = document.getElementById("sp").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert(email + " yor are login Now \n welcome to our website.");

                document.getElementById("si").value ="";
                document.getElementById("sp").value="";
                return ;
            }

        }
        function Forgot(){
            event.preventDefault();

            var email = document.getElementById("fp").value;

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }

            alert("email is send to your email check it in 24hr. \n Thanks");
            document.getElementById("fp").value ="";
        }






        