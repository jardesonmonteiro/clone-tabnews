// Em Next.js, cada arquivo dentro de "pages/" exporta um componente React.
// A convenção é nomear o componente principal com a primeira letra maiúscula.
function Home() {
  // Todo componente React precisa retornar JSX.
  // Aqui estamos apenas renderizando um título simples na página inicial.
  return <h1>Tainá, eu amo você. Se você me ama, dá uma risadinha 🤍</h1>;
}

// O Next.js exige que o componente da página seja o "default export".
// Isso permite que o framework carregue automaticamente esta página.
export default Home;
