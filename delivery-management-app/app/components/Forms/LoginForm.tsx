"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Icons } from "@/app/lib/constants";
import Link from "next/link";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface Props {
  callbackUrl?: string;
}

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string({
    required_error: "Please enter your password",
  }),
});

type InputType = z.infer<typeof FormSchema>;

function LoginForm(props: Props) {
  const router = useRouter();
  const [showInput, setShowInput] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.email,
      password: data.password,
    });
    if (!result?.ok) {
      alert(result?.error);
      return;
    }
    alert("Welcome To Sakura Dev Channel");
    router.push(props.callbackUrl ? props.callbackUrl : "/");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-start w-full"
    >
      <div className="flex flex-col items-center justify-start gap-8 w-full">
        <div className="flex flex-row px-4 gap-2.5 relative rounded-[0.5rem] border-none bg-input-defaut-color shadow-sm w-full h-[3.35rem]">
          <Image src={Icons.Mail} width={24} height={24} alt={""} />
          <input
            type="text"
            id="Username"
            className="peer flex-1 h-[3.35rem] border-none placeholder-black-20 bg-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Username"
            required
          />
        </div>
        <div className="flex flex-row px-4 gap-2.5 relative rounded-[0.5rem] border-none bg-input-defaut-color shadow-sm w-full h-[3.35rem]">
          <Image src={Icons.Password} width={24} height={24} alt={""} />
          <input
            type={showInput ? "text" : "password"}
            id="Password"
            className="peer flex-1 h-[3.35rem] border-none placeholder-black-20 bg-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Password"
            required
          />
          <Image
            src={showInput ? Icons.Eye : Icons.HideEye}
            width={16}
            height={16}
            alt={""}
            onClick={() => setShowInput(!showInput)}
            className="hover:scale-105"
          />
        </div>
      </div>
      <Link
        href={"/auth/fotgotPass"}
        className="text-base text-primary-100 font-normal mt-3 self-end cursor-pointer hover:scale-105"
      >
        Recover Password
      </Link>

      <button
        type="submit"
        className="rounded-xl w-[11.25rem] bg-primary-100 p-3 font-normal text-white text-xl mt-12 hover:scale-110"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
