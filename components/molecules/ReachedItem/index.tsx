interface ReachedItemProps {
  total: string;
  category: string;
}

export default function ReachedItem(props: ReachedItemProps) {
  const { total, category } = props;

  return (
    <div className="me-lg-35 ms-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{total}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{category}</p>
    </div>
  );
}
