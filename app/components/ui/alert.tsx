import type { HTMLAttributes, ReactNode } from "react";

export function Alert({
  title,
  description,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement> & { title: ReactNode; description?: ReactNode }) {
  return (
    <div className={`rounded-xl border border-yellow-300/30 bg-yellow-300/10 p-4 text-yellow-100 ${className}`} {...props}>
      <div className="font-semibold">{title}</div>
      {description && <div className="text-sm mt-1">{description}</div>}
    </div>
  );
}


