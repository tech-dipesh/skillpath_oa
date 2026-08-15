import type { MouseEvent } from "react"
import { theme } from "@/lib/theme"

interface RetryButtonProps {
  label: string
  onRetry: () => void
}

export function RetryButton({ label, onRetry }: RetryButtonProps) {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    onRetry()
  }

  return (
    <button className="retry-button" onClick={handleClick}>
      {label}
      
    </button>
  )
}
