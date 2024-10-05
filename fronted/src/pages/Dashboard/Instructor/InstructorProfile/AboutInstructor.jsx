import useUser from "../../../../Hooks/api/useUser";


const AboutInstructor = () => {
    const {user}=useUser();
  console.log(user);
  
    return (
        <div className="my-10">
          
            
          <div>
            <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-600 mb-3">Expertise:</h2>
            <p className="text-gray-500">
            Emily Davis is a Senior Web Developer with over 10 years of experience in building scalable web applications. He has extensive expertise in JavaScript, React, and Node.js and has mentored hundreds of students in mastering web development. He is passionate about coding best practices and modern frameworks.
            </p>
            </div>
            <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-600 mb-3">Introduction:</h2>
            <p className="text-gray-500">
            Emily Davis is a seasoned web developer with a knack for simplifying complex concepts. He believes in hands-on learning and equips his students with real-world skills through practical projects and challenges. If you’re ready to take your coding skills to the next level, John is the perfect guide!
            </p>
            </div>
            <div>
            <h2 className="text-2xl font-bold text-gray-600 mb-3">Description:</h2>
            <p className="text-gray-500"> With over a decade of experience in full-stack web development, Emily Davis brings a wealth of knowledge and practical insight into every lesson. As a senior developer at some of the top tech firms, John has been instrumental in leading teams and delivering successful projects. His approach to teaching blends theory with hands-on coding, ensuring that students not only understand key concepts but also can apply them in real-world scenarios. Whether you’re just starting out or looking to sharpen your skills, John’s clear explanations, practical exercises, and coding challenges will give you the confidence to build robust web applications. Join him in this comprehensive course and take your first steps towards becoming a proficient developer.</p>
            </div>
            </div>
        </div>
       
    );
};

export default AboutInstructor;