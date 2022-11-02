interface HomeProps {
  count: number;
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
