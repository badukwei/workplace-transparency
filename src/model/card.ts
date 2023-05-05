interface JobListing {
  company: string;
  title: string;
  salary: Salary;
  location: string;
  work_time: workTime;
  rating_this_job: jobRating;
  comment: string;
}

export interface Salary {
  monthly: number;
  bonus: number;
  yearly: number;
}

export interface workTime {
  everyday_work_time: number;
  every_month_overtime: number;
}

export interface jobRating {
  overall: number;
  environment_and_culture: number;
  work_load: number;
  overtime_rate: number;
  accomplishment: number;
  future: number;
}

export default JobListing;
