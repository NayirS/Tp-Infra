
import { useState } from 'react';
import styles from './Formulaire.module.css';

function Formulaire({ ajouterTache }) {
  const [texte, setTexte] = useState('');
  const [erreur, setErreur] = useState('');

  const envoyer = (e) => {
    e.preventDefault();
    if (!texte.trim()) {
      setErreur('Veuillez écrire une tâche');
      return;
    }
    if (texte.length > 100) {
      setErreur('Maximum 100 caractères');
      return;
    }
    ajouterTache(texte.trim());
    setTexte('');
    setErreur('');
  };

  const changerTexte = (e) => {
    setTexte(e.target.value);
    if (erreur) setErreur('');
  };

  return (
    <form onSubmit={envoyer} className={styles.formulaire}>
      <div className={styles.groupe}>
        <input
          type="text"
          value={texte}
          onChange={changerTexte}
          placeholder="Ajouter une tâche..."
          className={`${styles.champ} ${erreur ? styles.erreurChamp : ''}`}
          maxLength="100"
        />
        <button type="submit" className={styles.bouton}>Ajouter</button>
      </div>
      {erreur && <div className={styles.messageErreur}>{erreur}</div>}
      <div className={styles.compteur}>{texte.length}/100</div>
    </form>
  );
}

export default Formulaire;
