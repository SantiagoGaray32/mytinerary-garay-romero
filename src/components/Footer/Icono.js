export default function Icono(props) {
  return (
    <div>
      <a href="#">
        <img className="footerIcon" src={props.name} alt={props.alt}></img>
      </a>
    </div>
  );
}
