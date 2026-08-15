import { addPropertyControls, ControlType } from "framer"
import { CourseSection } from "@/components/CourseSection"
import { theme } from "@/lib/theme"

interface SkillpathCourseSectionProps {
  headingText: string
  accentColor: string
}

export default function SkillpathCourseSection({ headingText, accentColor }: SkillpathCourseSectionProps) {
  return <CourseSection headingText={headingText} accentColor={accentColor} />
}

addPropertyControls(SkillpathCourseSection, {
  headingText: {
    type: ControlType.String,
    title: "Heading",
    defaultValue: "Courses worth your time",
  },
  accentColor: {
    type: ControlType.Color,
    title: "Accent",
    defaultValue: theme.accent,
  },
})
