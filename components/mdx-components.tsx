import Image from "next/image";
import Divider from "./divider";
import { cn } from "@/lib/utils";
import * as runtime from "react/jsx-runtime";
import { AnimatedText } from "./animated-text";
import { PlaneAnimation } from "./plane-animation";

type ComponentsProps = React.HTMLAttributes<HTMLElement>;

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Divider,
  AnimatedText,
  PlaneAnimation,
  h1: ({ className, ...props }: ComponentsProps) => (
    <h1 className={cn("mt-8 font-bold text-primary", className)} {...props} />
  ),
  h2: ({ className, ...props }: ComponentsProps) => (
    <h2
      className={cn("mt-3 text-m font-semibold text-primary", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentsProps) => (
    <p className={cn("mt-3 text-secondary", className)} {...props} />
  ),
  pre: ({ className, ...props }: ComponentsProps) => (
    <pre
      className={cn("p-5 mt-8 text-sm rounded-xl overflow-auto", className)}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentsProps) => (
    <code
      className={cn(
        "text-secondary rounded-md px-1.5 py-0.5 font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
