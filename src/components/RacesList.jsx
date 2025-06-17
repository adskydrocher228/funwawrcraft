function RacesList() {
  const races = [
    { name: 'Orcs', description: 'Savage warriors from Draenor, united under the Horde.', icon: '🪓' },
    { name: 'Humans', description: 'Defenders of Azeroth, skilled in magic and steel.', icon: '🛡️' },
    { name: 'Undead', description: 'The Scourge spreads plague and terror across the land.', icon: '☠️' },
    { name: 'Night Elves', description: 'Ancient guardians of nature and the moon.', icon: '🌙' },
  ];

  return (
    <section className="mb-10">
      <h2>🏹 Playable Races</h2>
      <ul>
        {races.map((race, idx) => (
          <li key={idx} style={{ marginBottom: '1rem' }}>
            <strong>{race.icon} {race.name}</strong> — {race.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RacesList;
