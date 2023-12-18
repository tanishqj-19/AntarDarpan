import { SignIn } from "@clerk/nextjs";


const SignInPage = () =>{
    
    return (<div className="flex justify-center items-center py-10">
        <SignIn 
            afterSignInUrl={"/journal"}
            redirectUrl={"/journal"}
        />
    </div>)
}

export default SignInPage;