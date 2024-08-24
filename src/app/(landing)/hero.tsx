import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="space-y-5 px-4 py-24 text-center font-bold md:py-36">
      <div className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
        <h1>Welcome to the Holonexus!</h1>
      </div>
      <div className="text-base font-light text-foreground/80 sm:text-xl">
        Take guild management to the next level, bringing a whole new meaning to
        competitiveness.
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <Button
          className="rounded-2xl p-4 font-semibold md:p-6 md:text-lg"
          asChild
        >
          <Link href="/">Get Started</Link>
        </Button>
        <Button variant="link" className="text-foreground/70" asChild>
          <Link href="/">
            Learn More
            <ChevronRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};
