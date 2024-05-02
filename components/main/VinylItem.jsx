import Link from "next/link";

const VinylItem = ({ vinyl }) => {
  return (
    <tr>
      <td className="col-span-3 truncate">{vinyl.title}</td>
      <td>{vinyl.country}</td>
      <td className="text-center">{vinyl.year}</td>
      <td>{vinyl.label[0]}</td>
      <td className="text-center">{vinyl.format[0]}</td>
      <Link
        href={`https://www.discogs.com${vinyl.uri}`}
        target="_blank"
        className="flex-1 pr-3"
      >
        <td>
          <p className="btn text-center btn-primary">Buy Vinyl</p>
        </td>
      </Link>
    </tr>
  );
};

export default VinylItem;
