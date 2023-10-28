
interface SocialInterface {
  id: number;
  name: string;
  iconURL: string;
  url: string;
}

export const Socials: SocialInterface[] = [
  {
    id: 1,
    name: 'Twitter',
    iconURL: '/icons/tw.svg', // Updated path
    url: 'https://twitter.com/mhbaando'
  },

  {
    id: 2,
    name: 'Linkedin',
    iconURL: '/icons/lin.svg', // Updated path
    url: 'https://linkedin.com/in/mhbaando'
  },

  {
    id: 3, // Make sure each id is unique
    name: 'Github',
    iconURL: '/icons/gh.svg', // Updated path
    url: 'https://github.com/mhbaando'
  },
  {
    id: 4, // Make sure each id is unique
    name: 'Showwcase',
    iconURL: '/icons/shw.svg', // Updated path
    url: 'https://mhbaando.showwcase.com'
  }
];
