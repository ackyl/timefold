import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about">
      <h1>Hello there</h1>

      <div className="about-intro">
        <p>
          This website is managed by <strong>Ackyl</strong>.
        </p>
        <p>
          I'm now currently working as a <strong>Product Designer</strong> at{" "}
          <strong>Traveloka</strong>.
        </p>
        <p>
          I love to talk about anything engaging, immersive, interactive or
          modular.
        </p>
      </div>

      <div className="button">
        <p>Instagram</p>
        <a href="https://instagram.com/liminalbeams" target="_blank" />
        <img src="/right-arrow.svg" />
      </div>

      <div className="button">
        <p>Linkedin</p>
        <a
          href="https://www.linkedin.com/in/dimas-ackyl-mohamad-6903a4128/"
          target="_blank"
        />
        <img src="/right-arrow.svg" />
      </div>

      <div className="button">
        <p>Dribbble</p>
        <a href="https://www.dribbble.com/ackyl" target="_blank" />
        <img src="/right-arrow.svg" />
      </div>

      <div className="button red">
        <p>i̶̛͚̩͔͛̐n̴̝̆͝ ̷̺̞̜̄t̷͙̩͕͑͂h̴̫̗͊͋͐e̷̲̤̓̂ ̷͓̬̍e̴̗͌̚͝ȳ̶̘ē̸̯̥̾̚ ̶̠̀͒̅o̶̙̻̒̾̃f̴͔̗̱̃ ̶̨̙̞̈́ṫ̵̩͔h̴̨̬̳͋̽̍e̸͚͓͙̅͌ ̵̬̪͙͛̌͘b̵̮̮͗̕ê̸͇h̵̘͔̦͑o̵̹̲̜͋̄̓l̸͓̇d̷̛̤̰͍ē̵̦̚r̵͔̈́</p>
        <a href="https://www.youtube.com/watch?v=Wg8dfagCmEI" target="_blank" />
        <img src="/right-arrow.svg" />
      </div>

      <p className="about-footer">
        <i>
          * this markdown website is created using next.js and is deployed with
          vercel.
        </i>
      </p>
    </div>
  );
}
