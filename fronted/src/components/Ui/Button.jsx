export default function Button({ bgBtn, outlineBtn, children, handler }) {
  return (
    <>
      {outlineBtn && (
        <button onClick={handler}
          className={`inline-flex h-12 w-full px-4 items-center justify-center gap-2 whitespace-nowrap rounded  text-md font-medium tracking-wide  text-primary border-[2px] border-primary hover:scale-[1.2] transition-all duration-500 ease-in-out`}
        >
          {children}
        </button>
      )}
      {bgBtn && (
        <button onClick={handler}
          className={`inline-flex h-12 w-full px-4 items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium tracking-wide  text-[#FFF] bg-primary hover:scale-[1.2] transition-all duration-500 ease-in-out`}
        >
          {children}
        </button>
      )}
    </>
  );
}
