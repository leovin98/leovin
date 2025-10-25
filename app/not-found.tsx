import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100dvh-10rem)] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-8xl">404</h1>
        <h1 className="font-bold text-3xl">Page Not Found</h1>
        <p className="mt-3">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="mt-3">
          <p className="rounded-lg border border-foreground hover:bg-foreground px-5 py-3">
            Go Back
          </p>
        </Link>
      </div>
    </div>
  );
}
