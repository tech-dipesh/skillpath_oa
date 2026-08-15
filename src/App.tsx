import { Hero } from "@/components/Hero"
import { CourseSection } from "@/components/CourseSection"
import { Footer } from "@/components/Footer"
import { theme } from "@/lib/theme"

export function App() {
  return (
    <div style={{ background: theme.background, minHeight: "100vh" }}>
      <Hero />
      <CourseSection headingText="Course Which Worth the Everyone Times" accentColor={theme.accent} />
      <Footer />
    </div>
  )
}
