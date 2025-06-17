function NewsList({ news }) {
  return (
    <section className="mb-10">
      <h2>📰 News & Updates</h2>
      <ul>
        {news.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default NewsList;
