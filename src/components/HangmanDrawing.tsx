const HEAD = (
  <div className="w-[60px] h-[60px] border-[10px] border-black rounded-full absolute top-[50px] right-[-25px]"></div>
);
const BODY = (
  <div className="w-[10px] h-[100px] bg-black absolute top-[110px] right-[0px]"></div>
);
const RIGHT_ARM = (
  <div className="w-[70px] h-[10px] bg-black absolute top-[130px] left-[320px] rotate-[-30deg] origin-bottom-left" />
);
const LEFT_ARM = (
  <div className="w-[70px] h-[10px] bg-black absolute top-[130px] left-[240px] rotate-[30deg] origin-bottom-right" />
);

const RIGHT_LEG = (
  <div className="w-[70px] h-[10px] bg-black absolute top-[200px] left-[310px] rotate-[30deg] origin-bottom-left" />
);

const LEFT_LEG = (
  <div className="w-[70px] h-[10px] bg-black absolute top-[200px] left-[250px] rotate-[-30deg] origin-bottom-right" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export function HangmanDrawing({}) {
  return (
    <>
      <div className="relative">
        {HEAD}
        {BODY}
        {LEFT_ARM}
        {RIGHT_ARM}
        {LEFT_LEG}
        {RIGHT_LEG}
        <div className="h-[50px] w-[10px] bg-[black] absolute top-0 right-0"></div>
        <div className="h-[10px] w-[200px] bg-black ml-[120px]"></div>
        <div className="h-[400px] w-[10px] bg-black ml-[120px]"></div>
        <div className="h-[10px] w-[250px] bg-black"></div>
      </div>
    </>
  );
}
