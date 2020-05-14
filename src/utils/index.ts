export interface Contributions {
  src: string;
  type: string;
  link: string;
  description: string;
}

export interface CardProps {
  title: string;
  cardContent: string;
  Projects: Array<Contributions>;
}

export interface IconProps {
  key: string,
  link: string,
  icon: string
}

export const contributions = [
  {
    title: "Biography",
    cardContent: `
            Entry - Mid level software developer and former technical management consultant with
            strong financial services and government contracting background.
            Experienced in JavaScript, Node.js, React, React-Redux, and GraphQl.
            Professional with a Bachelor's degree focused in Political Science and Government from Fordham University.

            I currently work at American Express on the Benefits Dashboard team as a software developer.  `,
    Projects: [],
  },
  {
    title: "Noteable Projects",
    cardContent: "",
    Projects: [
      {
        src: "Rest Diagnostic Tool",
        type: "link",
        description: "A Chrome Extension to batch tests multiple endpoints",
        link: "https://chrome.google.com/webstore/detail/bhjmilcdbpbhpnokhkhmphfgbikhiojd/publish-accepted?authuser=0&hl=en",
      },
      {
        src: "AWS Continous Upload",
        type: "link",
        description: "An Electron Application to continously upload files to a S3 bucket",
        link: "https://github.com/grantlouisherman/aws-continuous-integration",
      }
    ]
  },
  {
    title: "Open Source PRs",
    cardContent: "List of PRs that I have had to various open source projevts",
    Projects: [
      {
        src: "js-ipfs",
        type: "link",
        description: "",
        link:
          "https://github.com/grantlouisherman/js-ipfs/commit/4ad104d85d813c2016f4abcafb46dfb5f0bba23b",
      },
      {
        src: "script-8",
        type: "link",
        description: "",
        link: "https://github.com/script-8/script-8.github.io/pull/163",
      },
      {
        src: "script-8",
        type: "link",
        description: "",
        link: "https://github.com/script-8/script-8.github.io/pull/197/commits",
      },
      {
        src: "Deck Deck Go",
        type: "link",
        description: "",
        link: "https://github.com/deckgo/deckdeckgo/pull/398",
      },
      {
        src: "Deck Deck Go",
        type: "link",
        description: "",
        link: "https://github.com/deckgo/deckdeckgo/pull/491",
      },
    ],
  },
  {
    title: "Tech Talks",
    cardContent: "Links to different tech talks",
    Projects: [
      {
        src: "Final Project",
        type: "video",
        description: "Final Project for FullStack Academy",
        link: "https://www.youtube.com/embed/cumCXcnWs_g",
      },
      {
        src: "Web Assembly Talk",
        type: "video",
        description: "Tech Talk on Web Assembly at FullStack Academy",
        link: "https://www.youtube.com/embed/I9eW9JkJiJk",
      },
      {
        src: "Hackathon",
        description: "Hackathon project at FullStack Academy building a application with Trufflle and React",
        type: "video",
        link: "https://www.youtube.com/embed/xvFsOmzMDXQ",
      },
    ],
  },
];

export const personelLinksLayout = [{
    "key": "github",
    "link": "https://github.com/grantlouisherman",
    "icon": "../../assets/icon/github.png"
  },
  {
    "key": "linkedin",
    "link": "https://www.linkedin.com/in/grant-herman-3b34258a/",
    "icon": "../../assets/icon/linkedin.png"
  },
  {
    "key": "stackoverflow",
    "link": "https://stackoverflow.com/users/4732217/grant-herman",
    "icon": "../../assets/icon/stackoverflow.png"
  },
  {
    "key": "resume",
    "link": "./../assets/resume.pdf",
    "icon": "../../assets/icon/resume.png",
    "download": true
  }
];
