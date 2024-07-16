import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <audio
        controls
        src='https://firebasestorage.googleapis.com/v0/b/uploadedbyosama.appspot.com/o/Music%2FEminem%20%E2%80%A2%20Tobey.mp3?alt=media&token=b3a1cbb6-a4c8-4536-91d4-471bca1ffc02'
      ></audio>
      <audio
        controls
        src='https://firebasestorage.googleapis.com/v0/b/uploadedbyosama.appspot.com/o/Music%2FAli%20Zafar%20%E2%80%A2%20Paharon%20Ki%20Qasam.mp3?alt=media&token=3456a5af-30c7-4626-a247-fa1a2109dffa'
      ></audio>
    </div>
  );
}
