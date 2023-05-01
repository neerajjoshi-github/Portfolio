import Link from "next/link";
export const paragraphData = [
  {
    value: (
      <p>
        My name is <span className="text-primary font-bold">Neeraj Joshi</span>,
        and I am a passionate web developer from India. I have been fascinated
        by the world of tech since I was a teenager, and over the past year, I
        started learning and exploring web development.
      </p>
    ),
  },
  {
    value: (
      <p>
        As a web developer, I am committed to creating beautiful, functional
        websites that not only look great but also provide an exceptional user
        experience. I take a user-centric approach to web development, and I
        believe that every website should be designed with the end-user in mind.
      </p>
    ),
  },
  {
    value: (
      <p>
        I specialize in a wide range of web development technologies, including{" "}
        <span className="font-bold">React Js</span> ,{" "}
        <span className="font-bold">Tailwind CSS</span>,{" "}
        <span className="font-bold">Node Js</span>,{" "}
        <span className="font-bold">Express</span>,{" "}
        <span className="font-bold">MongoDb</span>,{" "}
        <span className="font-bold">Next Js</span>, and{" "}
        <span className="font-bold">more</span>. Whether you need a simple
        website for your business or a complex web application, I have the
        skills and expertise to deliver high-quality results. Check out my{" "}
        <Link
          href="/projects"
          className="underline underline-offset-2 font-semibold"
        >
          projects
        </Link>{" "}
        to see my capabilities.
      </p>
    ),
  },
  {
    value: (
      <p>
        When I'm not coding, I enjoy spending time with my family, exploring new
        things, and learning about the latest trends in web development.
      </p>
    ),
  },
  {
    value: (
      <p>
        Thank you for taking the time to learn more about me. If you have any
        questions or would like to discuss a potential project, please feel free
        to get in{" "}
        <Link
          href="/contact"
          className="underline underline-offset-2 font-semibold"
        >
          touch
        </Link>
        . I would love to hear from you!
      </p>
    ),
  },
];
