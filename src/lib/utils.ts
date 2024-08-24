import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique erat at mauris varius dignissim. Integer dictum pharetra rutrum. Nam a nisi dolor. In hac habitasse platea dictumst. Donec et iaculis mi, sed faucibus lorem. Donec lectus tellus, vestibulum ut eros ornare, ullamcorper sollicitudin nulla. Cras dignissim lorem id justo.";
