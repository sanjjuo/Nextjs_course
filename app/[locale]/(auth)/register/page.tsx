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
import { zodResolver } from "@hookform/resolvers/zod"; // Import zodResolver to connect Zod schema validation with React Hook Form
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod"; // Import zod for schema-based form validation

const Register = () => {
  // Created schema by using zod
  const registerSchema = z
    .object({
      username: z.string().min(1, { message: "Username is Required" }),
      email: z
        .string()
        .min(1, { message: "Email is Required" })
        .email({ message: "Email id is invalid" }),
      password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(8, { message: "Password must be at least 8 characters." })
        .max(16, { message: "Password must not exceed 16 characters." }),
      confirmPassword: z
        .string()
        .min(1, { message: "Confirm Password is required" })
        .min(8, { message: "Confirm Password must be at least 8 characters." })
        .max(16, {
          message: "Confirm Password must not exceed 16 characters.",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password didn't match",
      path: ["confirmPassword"],
    });

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = (data: any) => {
    console.log("form submitted", data);
    toast.success("Form is submitted");
  };

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your details to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                      className="shadow-none h-12 border-2 focus:!ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
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
                      type="password"
                      placeholder="Enter password"
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
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm password"
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
              variant="outline"
              className="border text-blue-500 hover:text-white border-blue-500 w-full hover:bg-blue-500 h-10 mt-5"
            >
              Sign up
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="text-sm space-x-1">
        <p>Already have an account? </p>
        <Link href="/login" className="underline text-blue-500">
          Sign in
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Register;
