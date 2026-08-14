import { CourseSection } from "@/components/CourseSection"
import { theme } from "@/lib/theme"

export function App() {
  return (
    <div style={{ background: theme.background, minHeight: "100vh" }}>
      <CourseSection headingText="Course Which the Worth the Time For Everyone" accentColor={theme.accent} />
    </div>
  )
}
