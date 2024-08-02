import "../App.css";
import NavBar from "../components/NavBar/NavBar";
import homeBotVideo from "../assets/bigHero.mp4";
import teamPhoto from "../assets/images/team.png";
import botBrawlPhoto from "../assets/images/botbrawl.webp";
import buildBotExamplePhoto from "../assets/images/gvic.jpg";

export default function Home() {
  return (
    <>
      <main>
        <section class="hero">
          <video autoplay muted loop>
            <source src={homeBotVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <h3>Insert Robot Name</h3>
            <p>
              The video in the back will be removed obvs just need a video to
              run in the back. Our team's all original designed robot. Insert
              short description of the robot.
            </p>
          </div>
        </section>
        <section>
          <h1>Who Are We?</h1>
          <div class="content">
            <img src={teamPhoto} />
            <div>
              <h1>Who are we?</h1>
              <p>
                At IBZ, we are proud to introduce our student-led team,which is
                a dynamic and multifaceted group comprising four specialized
                divisions: Software, Business, Electrical, and Mechanical. Each
                division plays a crucial role in our collective mission to
                design and construct a state-of-the-art battle bot for upcoming
                competitions, showcasing the synergy of diverse expertise and
                collaborative spirit. Together,these four divisions create a
                powerhouse of creativity, technical skill, and strategic
                thinking. Driven by a passion for innovation and a competitive
                spirit, we are committed to pushing the boundaries of what's
                possible, striving for victory and excellence in every
                competition we enter. At IBZ, we believe that teamwork and
                interdisciplinary collaboration are the keys to success, and we
                are excited to see where our collective efforts will take us in
                the world of competitive robotics.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </section>
        <section>
          <h1>Competitions</h1>
          <div class="content">
            <img src={botBrawlPhoto} />
            <div>
              <h1>Competitions</h1>
              <p>
                The Bot Brawl Competition in Ontario is a captivating event
                where robotics enthusiasts showcase their engineering skills
                through custom-built combat robots. This competition allows
                participants to demonstrate innovation and strategic thinking in
                intense robotic battles. Learn More about the Bot Brawl and
                other events by visiting our events page
              </p>
              <button>Read More</button>
            </div>
          </div>
        </section>
        <section>
          <h1>Build With Us</h1>
          <div class="content">
            <img src={buildBotExamplePhoto} />
            <div>
              <h1>Build With Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
                Etiam sodales ac felis id interdum.
              </p>
              <div>
                <input type="text" placeholder="Enter your email" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
