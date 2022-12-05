import * as React from "react";

import { BusinessEntity } from "../../interfaces";

type ListDetailProps = {
  item: BusinessEntity;
};

const ListDetail = ({ item: entity }: ListDetailProps) => (
  <div>
    <h1>Detail for {entity.fullname}</h1>
    <p>DNI/CUIL:{entity.dni_cuil}</p>
    <p>Address:{entity.address}</p>
    <p>GeoLocation:{entity.latlng}</p>
    <p>Phone:{entity.phone}</p>
    <p>E-Mail:{entity.email}</p>
  </div>
);

export default ListDetail;
