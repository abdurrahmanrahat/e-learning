import useUser from "../../../Hooks/api/useUser";

export default function BioDescription() {
  const { user } = useUser();
  const intro = `Hi, I’m ${user?.name}, a web development instructor specializing in the MERN stack and JavaScript. With 2 years experience, I focus on hands-on, practical learning to help students become job-ready through real-world projects and interactive lessons.`;
  const About = `Welcome! My name is ${user?.name}, and I’m a passionate web development instructor with a specialization in the MERN stack (MongoDB, Express, React, and Node.js) and JavaScript. With over [X years of experience], I’ve helped numerous students transform their coding skills and build real-world applications that showcase their knowledge.

My teaching philosophy centers on practical, project-based learning. I believe the best way to learn programming is by getting your hands dirty with code, which is why my courses are filled with real-world examples, live coding sessions, and interactive projects. You won’t just learn the theory behind web development—you’ll apply it by building your own projects from scratch. By the end of my courses, you’ll have a strong portfolio that you can present to potential employers or clients.

I also emphasize keeping up with industry trends. Web development is always evolving, so I make sure my curriculum is up to date with the latest technologies, best practices, and tools. Whether you’re a complete beginner or an experienced developer looking to upgrade your skills, my courses are designed to meet your needs.

I’m committed to making learning engaging and accessible for everyone. My teaching style is clear and straightforward, breaking down complex topics into digestible pieces. Plus, I’m always available to support my students and answer questions, ensuring no one is left behind.

Join me in one of my courses and take your web development skills to the next level!`;
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-10 w-full">
        <span className="text-md font-semibold w-[11%] uppercase">Intro :</span>
        <span className="text-base font-medium text-gray-600 w-full text-justify">
          {user?.sortIntro || intro}
        </span>
      </div>
      <div className="flex gap-10 w-full">
        <span className="text-md font-semibold w-[11%] uppercase">About :</span>
        <span className="text-base font-medium text-gray-600 w-full text-justify">
          {user?.sortIntro || About}
        </span>
      </div>
    </div>
  );
}
