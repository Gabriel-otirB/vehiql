"use client";

import { useEffect } from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  useEffect(() => {
    // Roll the page back to the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <SignUp />
  )
}

export default SignUpPage;