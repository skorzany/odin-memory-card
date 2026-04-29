import styles from '../assets/styles/Card.module.css';

export default function Card({ id, name, types, spriteSource }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.sprite}
        alt={`${name}'s sprite`}
        src={spriteSource}
      ></img>
      <div className={styles.info}>
        <h4 className={styles.header}>
          <span>#{id}</span>
          {name}
        </h4>
        <ul className={styles.list}>
          {types.map((type, i) => (
            <li key={i} className={`${styles.type} ${styles[type]}`}>
              {type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
