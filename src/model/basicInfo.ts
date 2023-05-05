interface BasicInfo {
  company: string;
  title: string;
  salary: {
    monthly: number;
    bonus: number;
    yearly: number;
  };
  skills: {
    language: string[];
    toolAndLibrary: string[];
  };
  tenure: {
    tenureInCompany: number;
    tenureAllTime: number;
  };
}

export default BasicInfo;