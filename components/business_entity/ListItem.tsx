import React from "react";
import Link from "next/link";

import { BusinessEntity } from "../../interfaces";

type Props = {
  data: BusinessEntity;
};

const ListItem = ({ data }: Props) => (
  <Link href="/bussiness_entity/[id]" as={`/bussiness_entity/${data._id}`}>
    ${data.fullname}
  </Link>
);

export default ListItem;

// Fullname:{data.fullname}
//     DNI/CUIL:{data.dni_cuil}
//     Address:{data.address}
//     GeoLocation:{data.latlng}
//     Phone:{data.phone}
//     E-Mail:{data.email}