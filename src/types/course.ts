export interface Course {
  courseName: string
  courseCode: string
  description: string
  mainCategory: string
  shortCourse: string
  courseType: string
  pricePaise: number
  priceUsdCents: number
  mangoId: string
  refundable: boolean
}


export interface CountryResponse {
  country_code: CountryCode
}
