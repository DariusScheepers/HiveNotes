export interface CourseFromRest {
  courseId: number,
  code: string,
  name: string,
  description: string,
  icon: string,
  modules: number[]
}