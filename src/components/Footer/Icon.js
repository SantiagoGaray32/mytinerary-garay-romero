export default function Icon(props) {
  return (
    <div>
      <a href="#">
        <img className="footerIcon" src={props.name} alt={props.alt}></img>
      </a>
    </div>
  );
}
