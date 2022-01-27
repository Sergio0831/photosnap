interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function GenericList<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
