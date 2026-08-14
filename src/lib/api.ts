import type { Course, CountryResponse } from "@/types/course"

const baseUrl = "https://syncsphere-hiv6.onrender.com"

async function getJson<Data>(path: string): Promise<Data> {
  const response = await fetch(`${baseUrl}${path}`, { method: "GET" })
  if (!response.ok) {
    throw new Error(`request to ${path} failed with status ${response.status}`)
  }
  return (await response.json()) as Data
}

export function fetchCourses(): Promise<Course[]> {
  return getJson<Course[]>("/assignment/course-data")
}

export function fetchCountryCode(): Promise<CountryResponse> {
  return getJson<CountryResponse>("/assignment/country-code")
}
