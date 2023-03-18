import profileimg from "./img/resume.jpg";

export const Usercards = () => {
  return (
    <section className="cardsection">
      <img className="profileimg" src={profileimg} />
      <div className="name-title">
        <h3>ATHARV BHASME</h3>
        <p>Web Developer Fresher</p>
      </div>
      <h3>SKILLS</h3>
      <div className="allskill">
        <section className="skills">
          <h3>{skilll}</h3>
        </section>
        <section className="skills">
          <h3>{skilllist[1]}</h3>
        </section>
        <section className="skills">
          <h3>{skilllist[2]}</h3>
        </section>
        <section className="skills">
          <h3>{skilllist[3]}</h3>
        </section>
        <section className="skills">
          <h3>{skilllist[4]}</h3>
        </section>
        <section className="skills">
          <h3>{skilllist[5]}</h3>
        </section>
        <section className="skills">
          <h3>{skilllist[6]}</h3>
        </section>
      </div>
      <p>🕤 Joined on 30 Jun 2020</p>
    </section>
  );
};

const skilllist = [
  "HTML",
  "CSS",
  "JAVASCIPRT",
  "MONGODB",
  "JAVA",
  "NODEJS",
  "GITHUB",
];

const skilll = ({skilllist}) => {skilllist.map()}