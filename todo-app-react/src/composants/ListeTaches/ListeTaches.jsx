
import Tache from '../Tache';
import styles from './ListeTaches.module.css';

function ListeTaches({ taches, basculer, supprimer }) {
  if (taches.length === 0) {
    return <p className={styles.vide}>Aucune tâche pour l’instant.</p>;
  }

  return (
    <div>
      {taches.map((t) => (
        <Tache key={t.id} tache={t} basculer={basculer} supprimer={supprimer} />
      ))}
    </div>
  );
}

export default ListeTaches;
