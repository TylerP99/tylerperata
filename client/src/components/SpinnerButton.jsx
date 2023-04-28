import ClipLoader from "react-spinners/ClipLoader";

function SpinnerButton({type="button", isLoading=false, disabled=false, className="", text="\"text\" prop missing"}) {
  return (
    <button 
        type={type} 
        className={`flex justify-center items-center relative mx-auto max-w-[400px] w-[100%] py-3 text-xl border-2 border-white hover:bg-white/20 ${className} ${(isLoading ? "bg-white/20" : "")}`}
        disabled={disabled || isLoading}
        >
          {isLoading ? <ClipLoader className='absolute left-[2%]' color={"#ffffff"} /> : undefined}
          <span>{text}</span>
    </button>
  )
}

export default SpinnerButton