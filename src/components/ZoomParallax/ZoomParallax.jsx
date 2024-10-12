import styles from "./styles.module.scss";
import Picture1 from "../../../src/assets/1.jpeg";
import Picture2 from "../../../src/assets/2.jpeg";
import Picture3 from "../../../src/assets/3.jpg";
import Picture4 from "../../../src/assets/4.jpg";
import Picture5 from "../../../src/assets/5.jpg";
import Picture6 from "../../../src/assets/6.jpg";
import Picture7 from "../../../src/assets/7.jpeg";
// import image1 from "../assets/first-meme.jpg";
// import image2 from "../assets/second-meme.webp";
// import image3 from "../assets/third-meme.webp";
// import image4 from "../assets/fourth-meme.webp";
// import image5 from "../assets/fifth meme.webp";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <img
                  src={src}
                  alt="image"
                  placeholder="blur"
                  className="object-fill"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
