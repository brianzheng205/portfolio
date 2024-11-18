import { ProjectInfo } from "../../types";

const description = `
  PumpUp is a gym social media web app that provides a community for gym-goers of all levels, leveraging social media to
  let users share their workouts and learn from others. Unlike existing social media gym apps, with PumpUp, users can act
  anonymously, log workouts, and participate in competitions. Competitions are a good incentive for gym-goers of all levels to continue
  hitting their goals and combined with anonymity, allows users—especially beginners—to join competitions without fear of being judged.
  Overall, PumpUp is a safe space for gym-goers of all levels to connect, learn, and teach.
`;

const links = {
  PumpUp: "https://pump-up.vercel.app/",
};

const majorSkills = [
  "MongoDB",
  "Express.js",
  "Node.js",
  "Vue.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
];

export const projectInfo: ProjectInfo = {
  title: "PumpUp",
  links,
  description,
  skills: majorSkills,
  contributions: [
    {
      imageSrc: "/projects/pumpUp/profiles.png",
      title: "Friending",
      body: {
        "Mission Purpose": `
          Users need ways to connect with others.
        `,
        Resources: majorSkills,
        Journey: `
          I created a friendship schema to store information about friendships,
          including the users involved and the status of the friendship.
          I also created functions to handle the different stages of friending,
          such as sending a friend request, accepting a friend request, and
          declining a friend request. On the frontend, I created a page for users
          to send and manage friend requests.
        `,
        Results: `
          Users can now friend others and connect with them.
        `,
      },
      pictureFirst: true,
    },
    {
      imageSrc: "/projects/pumpUp/home.png",
      title: "Posting and Commenting",
      body: {
        "Mission Purpose": `
          Users need ways to share their workouts and learn from others.
        `,
        Resources: majorSkills,
        Journey: `
          I created schemas to store information about posts and comments,
          including the post content, post author, and comments' contents.
          I also created functions to handle the different operations on
          posts and comments, such as creating a new post or comment, getting all the
          posts and comments for a user, and deleting a post or comment. On the
          frontend, I created a Home page for users to view and create posts
          and comments.
        `,
        Results: `
          Users can now post and comment on posts.
        `,
      },
      pictureFirst: false,
    },
    {
      imageSrc: "/projects/pumpUp/data.png",
      title: "Logging Data",
      body: {
        "Mission Purpose": `
          Users need to be able to log their workouts and track their progress.
        `,
        Resources: majorSkills,
        Journey: `
          I created a schema to store information about the workouts, including the date and score.
          I also created functions to handle the different operations on
          logged workouts, such as creating a new workout, getting all the workouts for a user,
          filtering based on date and score, and deleting a workout. On the frontend, I used Vue.js
          to create a page for users to view, log, and delete their workouts.
        `,
        Results: `
          Users can now log their workouts and track their progress.
        `,
      },
      pictureFirst: true,
    },
    {
      imageSrc: "/projects/pumpUp/competitions.png",
      title: "Competitions",
      body: {
        "Mission Purpose": `
          Competitions are a good incentive for gym-goers of all levels to continue
          hitting their goals.
        `,
        Resources: majorSkills,
        Journey: `
          I created schemas to store information about the competitions, including the title,
          end date, and the users participating. I also created functions to handle the different operations
          on competitions, such as creating a new competition, editing a competition, and updating
          the winners of a competition. On the frontend, I created a page for
          users to view and join competitions.
        `,
        Results: `
          Users can now join competitions and compete with others.
        `,
      },
      pictureFirst: false,
    },
  ],
  imagesInfo: [],
};

export default projectInfo;
