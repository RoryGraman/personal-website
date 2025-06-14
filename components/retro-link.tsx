import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils" // Assuming you have a cn utility

interface RetroLinkProps {
  href: string
  icon: ReactNode
  label: string
  className?: string
}

export default function RetroLink({ href, icon, label, className }: RetroLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center justify-center space-x-3 p-3 border-2 border-stone-700 bg-amber-100 hover:bg-emerald-100 hover:shadow-[4px_4px_0px_#107050] transition-all duration-150 ease-in-out transform active:translate-y-px active:shadow-[2px_2px_0px_#107050]",
        className,
      )}
    >
      {icon}
      <span className="font-medium text-stone-700 group-hover:text-emerald-800">{label}</span>
    </Link>
  )
}
