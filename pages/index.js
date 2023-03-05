import { useState } from "react"
import Greetings from "../components/Greetings"
import styles from "../styles/Home.module.css"

export default function Home() {
  const [Card1open, setOpen] = useState(false)
  const [Card2open, setCard2open] = useState(false)
  const [Card3open, setCard3open] = useState(false)
  const [Card4open] = useState(false)
  setTimeout(() => {
    setOpen(true)

    // card1 disappear and card2 appears
    setTimeout(() => {
      setCard2open(true)

      // card2 disappear and card3 appears
      setTimeout(() => {
        setCard3open(true)

        //card3
      }, 70000);

      //card2
    }, 25000);

    //card1
  }, 4000);


  return (
    <>
      <Greetings message={"😄HI! \n 💘💗❤️ \n nice to meet you"} />

      <div className={`${styles.card} ${styles.card1} ${Card1open ? styles.open : styles.close} ${Card2open ? styles.closeCard : styles.open}`}>
        <h1 className={styles.title}>HI!</h1>
        <p className={styles.paragraph}>I just want to say <strong className={styles.bold}>congratulations!</strong> It seems that your crush has sent you this message. Maybe he or she is really shy to say it, but just wants to tell you something and may want to meet you tomorrow or even right now. Please reply to the message and express your feelings to him or her. That&apos;s all I want you to know - he or she really loves you. Goodbye!
        </p>
      </div>

      <div className={`${styles.card} ${styles.card2} ${Card2open ? styles.open : styles.close} ${Card3open ? styles.closeCard : styles.open}`}>
        <h1 className={styles.title}>Feelings</h1>
        <p className={styles.paragraph}>
          We&apos;ve known each other for a while now, and when we first met, maybe you just saw me as
          someone who was toxic, crazy, or just not your type. But for me, when I first met you,
          I saw you as someone who was really fun to talk to, and who always made me feel good.
          I also enjoyed teasing you sometimes in chat because i just don&apos;t want to do it in real life,
          and I&apos;m sorry if I ever made you emotional or hurt your feelings.
          <br />
          However, over time, <strong>my feelings towards you have changed</strong>.
          I have developed feelings for you and I wanted to be honest with you about how I feel.
          I understand if you don&apos;t feel the same way, but I felt like I needed to express my feelings to you.
          Thank you for taking the time to read my message
        </p>
      </div>

      <div className={`${styles.card} ${styles.card3} ${Card3open ? styles.open : styles.close} ${Card4open ? styles.closeCard : styles.open}`}>
        <h1 className={styles.title}>What i really want to write is</h1>

        <div className={styles.card3Feelings}>
          <span className={styles.card3Feelings1}>I</span>
          <span className={styles.card3Feelings2}>❤️</span>
          <span className={styles.card3Feelings3}>U</span>
        </div>
      </div>
    </>
  )
}
