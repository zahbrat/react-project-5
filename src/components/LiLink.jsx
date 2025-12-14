export default function LiLink ({text, id}) {
  return <li><a href={"#" + id} className="hover:underline">{text}</a></li>;
}