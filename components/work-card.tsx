import { cn } from "@/lib/utils";

export default function WorkCard({
  title,
  company,
  duration,
  className,
}: {
  title: string;
  company: string;
  duration: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-0.5 py-2 text-sm", className)}>
      <div className="flex gap-2 text-primary">
        <h3 className="font-semibold">{company}</h3>
      </div>
      <div className="flex w-full justify-between gap-x-4 text-secondary font-medium">
        <p className="text-sm">{title}</p>
        <p className="text-xs">{duration}</p>
      </div>
    </div>
  );
}
