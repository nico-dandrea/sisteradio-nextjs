import Link from "next/link";
import { BusinessEntity } from "../../interfaces";

import clientPromise from "../../lib/mongodb";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: BusinessEntity[];
};

export default function Clientes({ clientes }) {
  return (
    <Layout title="Business Entities List">
      <h1>Entities List</h1>
      <List items={clientes} />
      <p>
        <Link href="/">Go home</Link>
      </p>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("sisteradiotest");

    const clientes = await db.collection("clientes").find({}).toArray();
    return {
      props: { clientes: JSON.parse(JSON.stringify(clientes)) },
    };
  } catch (e) {
    console.error(e);
  }
}
