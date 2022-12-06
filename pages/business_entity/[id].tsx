import clientPromise from "../../lib/mongodb";
import { BusinessEntity } from "../../interfaces";
import Layout from "../../components/Layout";
import ListDetail from "../../components/business_entity/ListDetail";

type Props = {
  item?: BusinessEntity;
  errors?: string;
};

const ServerSidePropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.fullname : "User Detail"
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default ServerSidePropsDetail;

export async function getServerSideProps(id: string) {
  try {
    const client = await clientPromise;
    const db = client.db("sisteradiotest");

    const cliente = await db.collection("clientes").find({ _id: id }).toArray();
    return {
      props: { cliente: JSON.parse(JSON.stringify(cliente)) },
    };
  } catch (e) {
    console.error(e);
  }
}
