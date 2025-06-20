"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const loginSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password atleast 8 charcters" })
      .max(16, { message: "password don't exceed 16 characters" }),
  });

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { control, handleSubmit } = form;

  const loginFormSubmitFtn = (data: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/products");
      console.log("user logined successfully", data);
      toast.success("User logined successfully");
    }, 500);
  };
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            action=""
            onSubmit={handleSubmit(loginFormSubmitFtn)}
            className="space-y-4"
          >
            <FormField
              control={control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter username"
                      {...field}
                      className="shadow-none h-12 border-2 focus:!ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter password"
                      {...field}
                      className="shadow-none h-12 border-2 focus:!ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-blue-500 w-full hover:bg-blue-500/70 h-10 mt-5 cursor-pointer"
            >
              {loading ? (
                <p className="flex items-center gap-1">
                  <Loader className="animate-spin" /> Signing
                </p>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="text-sm space-x-1">
        <p>Don't have an account? </p>
        <Link href="/register" className="underline text-blue-500">
          Sign up
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Login;
