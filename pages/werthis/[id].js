export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((werthis) => {
    return {
      params: { id: werthis.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { werthis: data },
  };
};

const Id = ({ werthis }) => {
  return (
    <div>
      <h1>{werthis.name}</h1>
      <p>{werthis.email}</p>
      <p>{werthis.website}</p>
      <p>{werthis.address.city}</p>
    </div>
  );
};

export default Id;
