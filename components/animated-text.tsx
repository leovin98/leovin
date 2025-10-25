export function AnimatedText() {
  return (
    <div className="my-5 w-full">
      <div className="border-foreground bg-foreground flex h-[280px] items-center justify-center overflow-hidden rounded-xl border font-7xl">
        <svg
          className="animated-text"
          width="600"
          height="280"
          viewBox="0 0 200 100"
        >
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
              TEXT
            </text>
          </symbol>
          <use className="animated-text" xlinkHref="#s-text"></use>
          <use className="animated-text" xlinkHref="#s-text"></use>
          <use className="animated-text" xlinkHref="#s-text"></use>
          <use className="animated-text" xlinkHref="#s-text"></use>
          <use className="animated-text" xlinkHref="#s-text"></use>
        </svg>
      </div>
    </div>
  );
}
