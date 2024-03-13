import "./main.css";
import Image from "next/image";
export default function Main() {
  return (
    <>
      <main>
        <div className="text">
          <img
            className="profilep"
            src="./Rectangle 90.png"
            alt="Profile Photo"
          />
          <h1>Laura Smith</h1>
          <h3>Frontend Developer</h3>
          <h6>laurasmith.website</h6>
          <br />
        </div>
        <div className="buton">
          <button className="email">
            <img className="icon1" src="./Icon.png" alt="" />
            Email
          </button>
          <button className="linkedin">
            {" "}
            <img
              className="icon2"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
              alt="logo"
            />
            LinkedIn
          </button>
          <br />
          <br />
          <br />
        </div>

        <h2 id="about"> About</h2>

        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
          <br />
          <br />
        </p>

        <h2>Interests</h2>

        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          <br />
          <br />
          <br />
        </p>
      </main>
    </>
  );
}
