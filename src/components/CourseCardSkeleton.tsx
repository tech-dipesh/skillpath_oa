import "./CourseCardSkeleton.css"
export function CourseCardSkeleton() {
  return (
    <div className="course-skeleton">
      <div className="course-skeleton-line course-skeleton-tag" />
      <div className="course-skeleton-line course-skeleton-title" />
      <div className="course-skeleton-line course-skeleton-text" />
      <div className="course-skeleton-line course-skeleton-text short" />
      <div className="course-skeleton-line course-skeleton-price" />
    </div>
  )
}
