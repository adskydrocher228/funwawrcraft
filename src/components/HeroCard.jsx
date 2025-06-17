function HeroCard({ name, role, image }) {
  return (
    <div className="hero-card">
      <img src={image} alt={name} />
      <div className="hero-card-content">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default HeroCard;
