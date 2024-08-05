import { motion } from "framer-motion";
import generalStruggleBuildPhoto from "../assets/images/gvic.jpg";

export default function ContactUs() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          width: "80vw",
        }}>
        <div>
          <h1 style={{ textShadow: "0.25vh 0.25vh 1vh linen" }}>
            Who Are We ?
          </h1>
        </div>
        <div style={{ display: "flex", flexDirection: "row", height: "80%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <motion.img
              src={generalStruggleBuildPhoto}
              alt="team picture"
              style={{
                width: "20%",
                height: "50%",
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae itaque natus quae? Asperiores, explicabo nulla officia
              labore assumenda animi voluptatem cum sed aliquid. Possimus harum,
              obcaecati sunt, sed beatae omnis voluptatem voluptatum rerum
              labore molestias dignissimos laboriosam illo nemo iure non magni
              ab similique odio, nobis quod praesentium odit quasi.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
