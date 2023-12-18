import { SignUp } from "@clerk/nextjs";
 
const SignUpPage = () =>{
    return <div className="flex justify-center items-center py-10">
        <SignUp  
            afterSignUpUrl={"/new-user"}
            redirectUrl={"/new-user"}
        />
    </div>
}

export default SignUpPage;