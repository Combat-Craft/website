import { motion } from "framer-motion";
import teamPictureGeneric from "../assets/images/team.png";
import { scale } from "../components/NavBar/NavMenu/anim";

export default function AboutUs() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div>
        <h1 style={{ textShadow: "0.25vh 0.25vh 1vh linen" }}>Who Are We ?</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <motion.img
            src={teamPictureGeneric}
            alt="team picture"
            style={{
              width: "50%",
              height: "70%",
              borderRadius: "2.5vh",
              border: "0.25vh solid linen",
            }}
            whileHover={{ scale: 1.2 }}
          />
        </div>
        <div
          style={{
            textWrap: "wrap",
            padding: "2vw",
            justifyContent: "space-between",
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
          }}>
          <div style={{ padding: "2vh" }}>
            At IBZ, we take pride in our dynamic, student-led team comprised of
            four specialized divisions: Software, Business, Electrical, and
            Mechanical. Each division plays a pivotal role in our mission to
            design and build cutting-edge battle bots for upcoming competitions,
            exemplifying the synergy of diverse expertise and collaboration.
          </div>

          <div style={{ padding: "2vh" }}>
            Together, these four divisions form a powerhouse of creativity,
            technical skill, and strategic thinking. Fueled by a passion for
            innovation and a competitive spirit, we are dedicated to pushing the
            boundaries of possibility, striving for victory and excellence in
            every competition we enter.{" "}
          </div>

          <div style={{ padding: "2vh" }}>
            At IBZ, we believe that teamwork and interdisciplinary collaboration
            are the keys to success, and we are excited to see where our
            collective efforts will lead us in the world of competitive
            robotics.
          </div>
        </div>
      </div>
    </div>
  );
}
