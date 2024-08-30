export interface CourseData {
  courseInfo: CourseInfo;
  attendanceInfo: AttendanceInfo;
}

interface AttendanceInfo {
  data: number[];
  dates: string[];
}

interface CourseInfo {
  courseCode: string;
  courseName: string;
  courseType: string;
  coursePeriod: number;
  creditsTotal: number;
  credits: Credits;
  courseOutcomes: string[];
  mappedCourses: string[];
}

interface Credits {
  lecture: number;
  tutorial: number;
  practical: number;
  project: number;
}