import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AppSidebar } from "./(application)/components/navigation";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </header>
        <div className="flex size-full items-center justify-center">
          <div className="flex h-fit items-center justify-center gap-8">
            <Image
              src="/logo.png"
              alt="Banner"
              height={597}
              width={597}
              className="size-40"
            />
            <Separator orientation="vertical" className="h-48" />
            <div>
              <h1 className="text-5xl">404</h1>
              <p className="text-sm">Page Not Found</p>

              <Button variant="link" className="mt-4 p-0" asChild>
                <Link href="/">
                  <ArrowLeft /> Go Back
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default NotFoundPage;
