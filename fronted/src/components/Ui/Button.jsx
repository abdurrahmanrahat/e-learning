export default function Button({ bgBtn, outlineBtn, children, handler, style, type }) {
  return (
    <>
      {outlineBtn && (
        <button type={type} onClick={handler}
          className={`${style} inline-flex h-12 px-4 items-center justify-center gap-2 whitespace-nowrap rounded  text-md font-medium tracking-wide  text-primary border-[2px] border-primary hover:scale-[1.1] transition-all duration-500 ease-in-out`}
        >
          {children}
        </button>
      )}
      {bgBtn && (
        <button type={type} onClick={handler}
          className={`${style} inline-flex h-12 px-4 items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium tracking-wide  text-[#FFF] bg-primary hover:scale-[1.1] transition-all duration-500 ease-in-out`}
        >
          {children}
        </button>
      )}
    </>
  );
}
