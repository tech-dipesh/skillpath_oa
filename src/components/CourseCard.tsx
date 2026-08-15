import type { Course, CountryCode } from "@/types/course"
import { formatCoursePrice } from "@/lib/currency"

interface CourseCardProps {
  course: Course
  countryCode: CountryCode | null
  accentColor: string
}

export function CourseCard({ course, countryCode, accentColor }: CourseCardProps) {
  const price = formatCoursePrice(course, countryCode)

  return (
    <div className="course-card">
      <div className="course-card-top">
        <span className="course-card-category" style={{ color: accentColor }}>
          {course.mainCategory}
        </span>
        {course.refundable ? <span className="course-card-badge">Refundable</span> : null}
      </div>
      <h3 className="course-card-title">{course.courseName}</h3>
      <p className="course-card-description">{course.description}</p>
      <div className="course-card-price">
        {price !== null ? price : <span className="course-card-price-unavailable">Price unavailable</span>}
      </div>
    </div>
  )
}
