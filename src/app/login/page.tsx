import Button from "@/ui/Button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-cover h-screen bg-[url('/images/login-bg-mb.jpg')] w-full  bg-no-repeat block lg:bg-[url('/images/login-bg.jpg')]">
      <div className="text-white h-screen bg-black-40 drop-shadow-md flex flex-col justify-end lg:justify-center items-center py-6 px-4 lg:px-0 lg:w-1/2">
        <h1 className="font-normal text-[48px] lg:text-[72px] italic py-4">
          Welcome to
        </h1>
        <h1 className="font-bold text-[48px] lg:text-[72px] italic py-3">
          Rec<span className="font-normal">ii</span>p
          <span className="font-normal">ii</span>e
        </h1>
        <p className="font-normal py-3 text-sm lg:text-base">
          Please sign in to continue
        </p>
        <Link href="/">
          <Button className="bg-primary-900 w-full py-3 px-10 rounded-xl text-base font-semibold lg:rounded-lg lg:w-auto">
            Continue with Google
          </Button>
        </Link>
      </div>
    </div>
  );
}
