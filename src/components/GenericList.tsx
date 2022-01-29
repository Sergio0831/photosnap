interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function GenericList<T>(props: ListProps<T>) {
  return <>{props.items.map(props.renderItem)}</>;
}
