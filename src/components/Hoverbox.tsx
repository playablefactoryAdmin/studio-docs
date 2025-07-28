export default function Hoverbox({
  title,
  body,
  xPercent,
  yPercent,
}: {
  title: string;
  body: string;
  xPercent: number;
  yPercent: number;
}) {
  return (
    <div
      className="hover-box"
      style={{ left: xPercent + "%", top: yPercent + "%" }}
    >
      <div className="title">{title}</div>
      <div className="body">{body}</div>
    </div>
  );
}
