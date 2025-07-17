import { useState, useEffect } from 'react';

const CLE_STORAGE = 'taches_stockees';

function useTaches() {
  const [taches, setTaches] = useState(() => {
    try {
      const sauvegarde = localStorage.getItem(CLE_STORAGE);
      return sauvegarde ? JSON.parse(sauvegarde) : [];
    } catch (e) {
      console.error('Erreur de chargement des tâches :', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CLE_STORAGE, JSON.stringify(taches));
    } catch (e) {
      console.error('Erreur de sauvegarde des tâches :', e);
    }
  }, [taches]);

  const ajouterTache = (texte) => {
    const nouvelle = {
      id: Date.now(),
      texte,
      terminee: false,
    };
    setTaches((prev) => [nouvelle, ...prev]);
  };

  const basculerTache = (id) => {
    setTaches((prev) =>
      prev.map((t) => (t.id === id ? { ...t, terminee: !t.terminee } : t))
    );
  };

  const supprimerTache = (id) => {
    setTaches((prev) => prev.filter((t) => t.id !== id));
  };

  const supprimerTerminees = () => {
    setTaches((prev) => prev.filter((t) => !t.terminee));
  };

  const toutBasculer = () => {
    const toutEstTermine = taches.every((t) => t.terminee);
    setTaches((prev) =>
      prev.map((t) => ({ ...t, terminee: !toutEstTermine }))
    );
  };

  return {
    taches,
    ajouterTache,
    basculerTache,
    supprimerTache,
    supprimerTerminees,
    toutBasculer,
  };
}

export default useTaches;
