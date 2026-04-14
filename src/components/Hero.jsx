import logoSrc from "../assets/Union.svg";
import styles from './Hero.module.css';
import LogoSlider from './LogoSlider';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.headerGroup}>
        <div className={styles.logo}>
          <img src={logoSrc} alt="Креати" />
        </div>

        <div className={styles.titleBlock}>
          <p className={styles.headline}>
            Превращаем продукты{' '}
            <br />
            <span className={styles.headlineItalic}>в эстетичные&nbsp; решения</span>
          </p>
          <p className={styles.subtitle}>
            Помогаем компаниям выделиться среди конкурентов и завоевать
            доверие аудитории через продуманный пользовательский опыт
          </p>
        </div>
      </div>

      <div className={styles.btnGroup}>
        <button className={styles.btnPrimary}>
          <span>Обсудить проект</span>
        </button>
        <button className={styles.btnSecondary}>
          <span>Наши работы</span>
        </button>
      </div>

      {/* Премиум слайдер логотипов */}
      <LogoSlider />
    </section>
  );
}