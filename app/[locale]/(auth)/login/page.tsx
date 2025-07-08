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
import { loginServices } from "@/Api_Services/authServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Link, useRouter } from "@/i18n/navigation";
import Logo from "@/components/Logo/Logo";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const loginSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Email is Required" })
      .email({ message: "Email id is invalid" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .max(16, { message: "Password must not exceed 16 characters" }),
  });

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { control, handleSubmit } = form;

  const loginFormSubmitFtn = async (data: LoginTypes) => {
    setLoading(true);
    try {
      const response = await loginServices(data);
      console.log("Login response:", response);

      if (response.access_token) {
        localStorage.setItem("user", JSON.stringify(response));
        toast.success("User logged in successfully");
        router.push("/products");
      } else {
        toast.error("Login failed: No token received");
      }
    } catch (error: any) {
      setLoading(false);
      const message = error?.response?.data?.message || "Login failed";
      toast.error(message);
      console.log("Login error:", error);
    }
  };

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <div className="flex items-center justify-center pb-10">
          <Logo style="navbar" />
        </div>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Enter your email and password to access your account.
        </CardDescription>
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      {...field}
                      className="shadow-none h-12 border-2 focus:!ring-0 rounded-xl"
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
                      className="shadow-none h-12 border-2 focus:!ring-0 rounded-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-blue-500 w-full hover:bg-blue-500/70 h-12 mt-10 cursor-pointer rounded-xl"
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
      {/* <CardFooter className="text-sm space-x-1">
        <p>Don't have an account? </p>
        <Link href="/register" className="underline text-blue-500">
          Sign up
        </Link>
      </CardFooter> */}
    </Card>
  );
};

export default Login;
