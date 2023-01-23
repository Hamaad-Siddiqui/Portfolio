export interface Work {
 title: string;
 description: string;
 image: string;
 stack: string[];
 tags: string[];
 links: {
  github?: string;
  website?: string;
  playStore?: string;
  appStore?: string;
 };
}
