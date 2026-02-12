
export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  instruments?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  date: string;
}

export interface PersonalInfo {
  dob: string;
  maritalStatus: string;
  nationality: string;
}
