interface Props {
    label: string;
}

export const TableHeadElement = ({ label }: Props) => {
  return (
    <th className="py-4 text-left">{label}</th>
  )
}