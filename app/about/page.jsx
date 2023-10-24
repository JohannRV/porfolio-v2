/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Sidebar from "../components/Sidebar";

const page = () => {
  return (
    <div className="bg-dark min-h-screen mx-auto flex ">
      <nav>
        <Sidebar />
      </nav>
      <div className="flex-col items-center mx-auto">
        <section className="md:px-28 md:text-left md:leading-6 leading-6 px-16 text-center">
          <h1 className="text-text_primary text-4xl font-semibold m-0 pt-5">
            About Me
          </h1>
          <p className="text-text_secondary pb-4">
            My professional history and programming
          </p>
          <p className="text-text_primary">
            Hey there, nice to meet you, i am Johan Román Vargas! I&apos;m 20
            years old and I live in Costa Rica.
          </p>
          <p className="text-text_primary py-2">
            In 2023, I started exploring and programming out of curiosity
            without knowing that I would instantly fall in love with it. Since
            then, I&apos;ve made up my mind about what I want to study.
          </p>
          <p className="text-text_primary py-2">
            I started taking a Python course to learn the basics, but i treated
            it more like a hobby than something serious. When i finished the
            course, i was undecided about whether to pursue the career i studied
            in high school, which is electromechanical engineering, and continue
            studying in that field, or to dedicate myself to becoming a
            developer.
          </p>
          <p className="text-text_primary py-2">
            After a few weeks of reflection, I decided to enroll in a free
            bootcamp called OpenBootcamp, as i didn&apos;t have many resources.
            There, I took courses on programming fundamentals, HTML, CSS,
            JavaScript, and ReactJS.
          </p>
          <p className="text-text_primary py-2">
            This year, I'm starting to study a diploma in Information
            Technology. I'm doing this to obtain a degree that showcases my
            skills and abilities.
          </p>
          <p className="text-text_primary py-2">
            It&apos;s evident that i have a strong passion for learning, and I
            agree that in the ever-evolving world of technology and programming,
            there&apos;s always something new to learn. Being prepared and
            staying updated is indeed crucial in this field.
          </p>
          <p className="text-text_primary py-2">
            This has been my journey so far in programming. I hope to have
            captured your attention and to be the person you are looking for in
            your company.
          </p>
          <p className="text-text_secondary py-2">
            My professional experience:
          </p>
          <p className="text-text_primary py-2 leading-7">
            As I mentioned before, I have a background as an electromechanical
            technician with professional experience working with buses and cars.
            During my practical training, I gained hands-on experience in
            maintaining and troubleshooting electromechanical systems in these
            vehicles. I developed skills in areas such as electrical systems,
            mechanical components, and diagnostics. My experience in the
            electromechanical field has honed my problem-solving abilities,
            attention to detail, and ability to work effectively under pressure.
            I understand the importance of ensuring the smooth operation of
            complex systems and the significance of preventive maintenance to
            minimize downtime. While my focus has shifted towards programming, I
            believe that my electromechanical background provides me with a
            unique perspective and a strong foundation for problem-solving in
            technical fields. I am confident that my diverse skill set,
            combining both programming and electromechanical expertise, will
            bring value to your team and allow me to contribute effectively to
            projects involving automotive or electromechanical systems.
          </p>
          <p className="text-text_primary py-2 mb-12 leading-7">
            Currently, I am working at a supermarket. While my current role is
            not directly related to my background in programming or
            electromechanics, it has provided me with valuable experience in
            customer service, teamwork, and organizational skills. I believe
            that these transferable skills, combined with my technical
            background and passion for programming, make me a well-rounded
            professional capable of adapting to new challenges. I have been able
            to apply my problem-solving abilities and attention to detail in my
            current role, ensuring efficient operations and delivering excellent
            customer service. Additionally, my experience in a fast-paced
            environment has strengthened my ability to manage multiple tasks and
            work effectively under pressure. Although my current position is
            different from my desired career path in programming, it has allowed
            me to develop important skills and a strong work ethic. I am eager
            to leverage my diverse experiences and transition into a programming
            role where I can fully utilize my technical skills and contribute to
            innovative projects. I am actively pursuing opportunities to further
            my programming career, and I am excited about the potential to
            combine my passion for technology with my professional experience in
            a new role.
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
