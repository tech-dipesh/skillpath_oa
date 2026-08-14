import { useCallback, useEffect, useState } from "react"
import type { Course, CountryResponse } from "@/types/course"
import type { LoadState } from "@/types/loadState"
import { fetchCourses, fetchCountryCode } from "@/lib/api"
import { CourseGrid } from "@/components/CourseGrid"
import { CourseCard } from "@/components/CourseCard"
import { CourseCardSkeleton } from "@/components/CourseCardSkeleton"
import { RetryButton } from "@/components/RetryButton"
import "./CourseSection.css"
interface CourseSectionProps {
  headingText: string
  accentColor: string
}


export function CourseSection({ headingText, accentColor }: CourseSectionProps) {
  const [courseState, setCourseState] = useState<LoadState<Course[]>>({ status: "loading" })
  const [countryState, setCountryState] = useState<LoadState<CountryResponse>>({ status: "loading" })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    
  }, [attempt])

   return (
    <section className="course-section">
      <h2 className="course-section-heading">{headingText}</h2>
   </section>
  )
}
