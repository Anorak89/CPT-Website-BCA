import SignIn from "@/components/Auth/Signin";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

const SignInPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In" />
      <SignIn />
    </>
  );
};

export default SignInPage;