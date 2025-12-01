import { cn } from "@/lib/utils";

const CanvasWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto mb-4 h-[50dvh] w-[50dvw] max-w-full rounded-md bg-muted",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CanvasWrapper;
