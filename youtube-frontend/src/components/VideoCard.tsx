export function VideoCard(props: any) {
  return (
    <div className="p-3">
      <img src={props.thumbnail} alt="" className="rounded-xl" />
      <div className="grid grid-cols-12 pt-2 pl-3">
        <div className="col-span-1">
          <img src={props.image} alt="" className="rounded-full w-12 h-12" />
        </div>
        <div className="col-span-11">
          <div>{props.title}</div>
          <div className="col-span-11  text-gray-700 text-base">
            {" "}
            {props.author}
          </div>
          <div className="col-span-11 text-gray-700 text-base">
            {" "}
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
