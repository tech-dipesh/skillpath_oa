import type { ReactNode } from "react"
import "./CourseGrid.css"
interface CourseGridProps {
  children: ReactNode
}

export function CourseGrid({ children }: CourseGridProps) {
  return (
    <div className="course-grid">
      {children}
    </div>
  )
}
