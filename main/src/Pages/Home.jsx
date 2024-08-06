import AnimatedTextHeading1 from "../components/AnimatedText/AnimatedTextHeading1";
import AnimatedTextHeading2 from "../components/AnimatedText/AnimatedTextHeading2";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        <AnimatedTextHeading1
          heading1={"Welcome to Combat Craft"}
          styles={{ fontSize: "5vw" }}></AnimatedTextHeading1>
        <div style={{ padding: "5vh" }}></div>
        <AnimatedTextHeading2
          heading2={"Where Robots learn the Art of War"}
          styles={{ fontSize: "2vw" }}></AnimatedTextHeading2>
      </div>
    </>
  );
}
