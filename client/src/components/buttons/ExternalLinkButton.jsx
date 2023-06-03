function ExternalLinkButton({text, to="#", className=""}) {
  return (
    <a
    className={`${className} border-2 py-2 block text-center rounded-sm hover:bg-white/20`}
    href={to}
    target="_blank"
    rel='noreferrer'
    >{text}</a>
  )
}

export default ExternalLinkButton;