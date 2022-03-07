export type TDate = [string] | [string, string];
export interface Contents {
  profile: Profile;
  projects: Project[];
  educations: Education[];
}
export interface Profile {
  name: string;
  email: string;
  tel: string;
  link: string;
  github: string;
}
export interface Project {
  title: string;
  link: string;
  date: TDate;
  image: string;
  content: string;
  stack: string[];
}
export interface Education {
  univercity: string;
  degree: string;
  date: TDate;
}