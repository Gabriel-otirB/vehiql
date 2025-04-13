"use client";

import { useEffect } from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  useEffect(() => {
    // Roll the page back to the top
    window.scrollTo(0, 0);
  }, []);

  return <SignIn />;
};

export default SignInPage;
