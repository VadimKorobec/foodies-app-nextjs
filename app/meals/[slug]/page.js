const MealPage =  async({ params }) => {
  const { slug } =  await params;

  return (
    <main>
      <h1>Meal Page</h1>
      <p>{slug}</p>
    </main>
  );
};

export default MealPage;
