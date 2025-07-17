
import styles from './Filtres.module.css';

function Filtres({ filtreActif, changerFiltre }) {
  const filtres = [
    { id: 'toutes', label: 'Toutes' },
    { id: 'encours', label: 'En cours' },
    { id: 'terminees', label: 'Terminées' },
  ];

  return (
    <div className={styles.filtres}>
      {filtres.map((f) => (
        <button
          key={f.id}
          onClick={() => changerFiltre(f.id)}
          className={`${styles.bouton} ${filtreActif === f.id ? styles.actif : ''}`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default Filtres;
