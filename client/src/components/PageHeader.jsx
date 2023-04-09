function PageHeader({text="Header"}) {
  return (
    <h1
    className="text-4xl border-b-black border-b-2 mb-5 p-4"
    >{text}</h1>
  );
}

export default PageHeader;