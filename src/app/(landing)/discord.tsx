import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Discord = () => {
  return (
    <Card className="relative isolate overflow-hidden bg-primary/5 px-6 py-8 shadow-2xl sm:rounded-3xl sm:px-16 md:py-12 lg:flex lg:gap-x-20 lg:px-24 lg:py-0">
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Bring the Holonexus to your Discord server!
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Invite our Discord bot to bring the power of the Holonexus to your
          Discord server.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <Button>Invite Now!</Button>
          <Button variant="link" className="px-0 text-foreground/70" asChild>
            <Link href="/">
              Learn More
              <ChevronRight />
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative lg:mt-8 lg:h-80">
        <Image
          alt="App screenshot"
          src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          width={1824}
          height={1080}
          className="absolute left-0 top-0 hidden w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 lg:flex"
        />
      </div>
    </Card>
  );
};
