import { Hero } from "@/components/Hero"
import { theme } from "@/lib/theme"

export function App() {
  return (
    <div style={{ background: theme.background, minHeight: "100vh" }}>
      <Hero />
    </div>
  )
}
