import React from 'react'
import { Input } from "@/components/ui/input";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <section className="w-96">
      <div>
        <h3>  Reset Password   </h3>
      </div>

      <div>
        <label htmlFor="Email"> Email </label>
        <Input placeholder="Email" type="text" />
      </div>
 
      <div>
        <Link href="/auth/sign-in" className="text-sm text-green-800">
          Already have an account? Sign In
        </Link>
      </div>
    </section>
  )
}

export default ForgotPasswordPage