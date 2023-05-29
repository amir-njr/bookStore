import HadrLayout from "@/components/Layout/HadrLayout";

export default function detail( props ) {
  
  const { filtered } = props;
  console.log(filtered);
  return (
    <HadrLayout>
      <h1>{filtered[0].title}</h1>
    </HadrLayout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/books");
  const data = await res.json();
  const sliced = data.slice(0, 10);
  const paths = sliced.map((item) => ({
    params: { bookId: item.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { bookId },
  } = context;
  const res = await fetch(`http://localhost:3000/api/books`);
  const data = await res.json();
  const filtered = data.filter((item) => item.id == bookId);
  console.log(filtered);

  return {
    props: { filtered },
  };
}
