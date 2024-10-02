import styles from "./styles.module.css";

const Hero = () => {
  return (
    <div className={styles.hero_video_container}>
      <video className={styles.hero_video} autoplay loop muted playsinline>
        <source src="/assets_new/video/1.webm" type="video/webm" />
        <source src="/assets_new/video/1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
