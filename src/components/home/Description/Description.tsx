import Image from 'next/image';
import styles from './Description.module.sass';


export const Description = () => {
  return (
    <section className={styles.Description}>
      <Image 
        src="/images/description.jpeg" 
        alt="products marketplace" 
        width={500} 
        height={300}
        priority={false}
        quality={100}
      />
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrows Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}