
import styles from './Tache.module.css';

function Tache({ tache, basculer, supprimer }) {
  return (
    <div className={`${styles.tache} ${tache.terminee ? styles.terminee : ''}`}>
      <span onClick={() => basculer(tache.id)} className={styles.texte}>
        {tache.terminee ? '✅' : '⭕'} {tache.texte}
      </span>
      <button onClick={() => supprimer(tache.id)} className={styles.supprimer}>
        🗑
      </button>
    </div>
  );
}

export default Tache;
