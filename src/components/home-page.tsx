import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="font-sans flex flex-col min-h-screen min-w-screen items-center justify-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center justify-center w-full">
        <Card className="w-full max-w-md mx-auto text-center">
          <CardHeader>
            <CardTitle>Welcome to My Portfolio</CardTitle>
            <CardDescription>
              Colton Baumgard
              <h2>csbaumgard@gmail.com</h2>
              <h3>724-984-7845</h3>
            </CardDescription>
          </CardHeader>
          </Card>
          <Card className="w-full max-w-md mx-auto text-center">
          <CardContent className="flex justify-between items-center p-6">
            <div className="flex-1 pr-4">
            <Image
              src="/Image003.png"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full dark:invert"
            />
            </div>
            <div className="flex-1 pl-4 text-right"> 
            <p className="text-sm">
              Former craps dealer pursuing their passion to become a programmer. Self motivated 
and adaptable employee seeking to develop their skills as a junior developer.
            </p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-md mx-auto text-center">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Feel free to reach out via email or phone.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input type="text" placeholder="Your Message" />
              <Button type="submit">Send Message</Button>
            </form>
          </CardContent>
          </Card>
      </main>
    </div>
  );
}