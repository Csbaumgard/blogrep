"use client";

import * as React from "react"
import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@uidotdev/usehooks"
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PostBuilder } from "./post-builder";


export function PostDrawer() {
  const [open, setOpen] = React.useState(false)
  // const isDesktop = useMediaQuery("(min-width: 768px)")
  const isDesktop = true; // Force desktop for now, remove later.
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Post</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Post</DialogTitle>
            <DialogDescription>
                Type your post here. Click submit when youre done.
            </DialogDescription>
          </DialogHeader>
          <PostForm />
        </DialogContent>
      </Dialog>
    )
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Post</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Post</DrawerTitle>
          <DrawerDescription>
            Type your post here. Click submit when youre done.
          </DrawerDescription>
        </DrawerHeader>
        <PostForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
function PostForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <PostBuilder />
      </div>
    </form>
  )
}