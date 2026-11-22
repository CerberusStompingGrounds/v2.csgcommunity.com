import type { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <Page>
      <Card>
        <CardHeader>
          <CardTitle className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl">
            Not Found
          </CardTitle>
          <CardDescription>404!</CardDescription>
        </CardHeader>
        <CardContent>Could not find requested resource</CardContent>
        <CardFooter className="flex justify-evenly">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </Page>
  );
}
