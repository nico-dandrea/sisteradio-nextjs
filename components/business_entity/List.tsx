import * as React from 'react'
import ListItem from '../business_entity/ListItem'
import { BusinessEntity } from '../../interfaces'

type Props = {
  items: BusinessEntity[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item._id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
