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

const skeletonCount = 6

export function CourseSection({ headingText, accentColor }: CourseSectionProps) {
  const [courseState, setCourseState] = useState<LoadState<Course[]>>({ status: "loading" })
  const [countryState, setCountryState] = useState<LoadState<CountryResponse>>({ status: "loading" })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let cancelled = false
    setCourseState({ status: "loading" })
    setCountryState({ status: "loading" })

    fetchCourses()
      .then((courses) => {
        if (!cancelled) setCourseState({ status: "loaded", data: courses })
      })
      .catch(() => {
        if (!cancelled) setCourseState({ status: "error" })
      })

    fetchCountryCode()
      .then((country) => {
        if (!cancelled) setCountryState({ status: "loaded", data: country })
      })
      .catch(() => {
        if (!cancelled) setCountryState({ status: "error" })
      })

    return () => {
      cancelled = true
    }
  }, [attempt])

  const handleRetry = useCallback(() => {
    setAttempt((current) => current + 1)
  }, [])

  const countryCode = countryState.status === "loaded" ? countryState.data.country_code : null

  return (
    <section className="course-section">
      <h2 className="course-section-heading">{headingText}</h2>

      {courseState.status === "loading" ? (
        <CourseGrid>
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <CourseCardSkeleton key={index} />
          ))}
        </CourseGrid>
      ) : null}

      {courseState.status === "error" ? (
        <div className="course-section-message">
          <p>Couldn't load courses right now. This API fails on purpose sometimes.</p>
          <RetryButton label="Try again" onRetry={handleRetry} />
        </div>
      ) : null}

      {courseState.status === "loaded" && courseState.data.length === 0 ? (
        <div className="course-section-message">
          <p>No courses are live at the moment. Check back shortly.</p>
          <RetryButton label="Check again" onRetry={handleRetry} />
        </div>
      ) : null}

      {courseState.status === "loaded" && courseState.data.length > 0 ? (
        <CourseGrid>
          {courseState.data.map((course) => (
            <CourseCard
              key={course.mangoId}
              course={course}
              countryCode={countryCode}
              accentColor={accentColor}
            />
          ))}
        </CourseGrid>
      ) : null}

    </section>
  )
}
