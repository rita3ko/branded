import Link from "next/link";
import { SignupForm } from "@/components/signup-form";
import { createClient } from "@/utils/supabase/server";
import { signup } from "./actions";
export const runtime = 'edge';

export default async function Signup({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const supabase = createClient();
  const idString = searchParams.ids as string;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center p-4">
        <div className="w-full min-h-screen max-w-md flex flex-col space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <SignupForm signup={signup} idString={idString} />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
