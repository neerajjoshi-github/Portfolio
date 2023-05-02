export type ProjectCardDataType = {
  titile: string;
  description: string;
  tech: string;
  githubLink: string;
  liveLink: string;
  imageUrls: string[];
};

export type ProjectCardsArrayType = ProjectCardDataType[];

export const projectCardsData: ProjectCardsArrayType = [
  {
    titile: "Netflix Clone",
    description:
      "The Netflix clone project is a web application that aims to replicate the core features and functionalities of the popular video streaming service, Netflix. It is designed to provide users with a seamless  streaming experience, allowing them to browse, search, and watch movies and TV shows.",
    tech: "NextJs | Tailwind CSS | API",
    githubLink: "/github/netflix-clone",
    liveLink: "/netflix-cone",
    imageUrls: [
      "/images/projects/netflix-1.jpg",
      "/images/projects/netflix-2.webp",
      "/images/projects/netflix-3.jpg",
      "/images/projects/netflix-4.jpg",
    ],
  },
];
