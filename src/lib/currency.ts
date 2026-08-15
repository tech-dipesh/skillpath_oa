import type { Course, CountryCode } from "@/types/course"

const rupeeFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
})

const dollarFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
})

export function formatCoursePrice(course: Course, countryCode: CountryCode | null): string | null {
  if (countryCode === "IN") {
    const rupees = course.pricePaise / 100
    return rupeeFormatter.format(rupees)
  }
  if (countryCode === "US") {
    const dollars = course.priceUsdCents / 100
    return dollarFormatter.format(dollars)
  }
  return null
}
