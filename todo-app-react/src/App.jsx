import { useState } from 'react';
import Formulaire from './composants/Formulaire';
import ListeTaches from './composants/ListeTaches';
import Filtres from './composants/Filtres';
import useTaches from './hooks/useTaches';
import './index.css';

function App() {
  const {
    taches,
    ajouterTache,
    basculerTache,
    supprimerTache,
    supprimerTerminees,
    toutBasculer,
  } = useTaches();

  const [filtre, setFiltre] = useState('toutes');
  const [recherche, setRecherche] = useState('');

  const tachesFiltrees = taches
    .filter((t) => {
      if (filtre === 'encours') return !t.terminee;
      if (filtre === 'terminees') return t.terminee;
      return true;
    })
    .filter((t) => t.texte.toLowerCase().includes(recherche.toLowerCase()));

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '600px',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Ma Liste de Tâches
      </h1>

      <Formulaire ajouterTache={ajouterTache} />

      {taches.length > 0 && (
        <>
          <input
            type="text"
            placeholder="Rechercher une tâche..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              marginBottom: '1rem',
              fontSize: '1rem',
              backgroundColor: '#121212',
              color: '#fff',
            }}
          />

          <Filtres filtreActif={filtre} changerFiltre={setFiltre} />

          {taches.some((t) => t.terminee) && (
            <button
              onClick={supprimerTerminees}
              style={{
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                marginBottom: '0.5rem',
                display: 'block',
              }}
            >
              Supprimer les tâches terminées
            </button>
          )}

          <button
            onClick={toutBasculer}
            style={{
              background: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              marginBottom: '1rem',
              display: 'block',
            }}
          >
            {taches.every((t) => t.terminee) ? 'Tout décocher' : 'Tout cocher'}
          </button>
        </>
      )}

      <ListeTaches
        taches={tachesFiltrees}
        basculer={basculerTache}
        supprimer={supprimerTache}
      />
    </div>
  );
}

export default App;
