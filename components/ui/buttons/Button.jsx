import Link from "next/link";

const Button = ({ href, text, onClick }) => {
    if (href) {
        return (
          <Link 
          href={href} 
          className="flex items-center bg-purple-800 space-x-3 text-white opacity-90 hover:opacity-80 cursor-pointer rounded p-2 m-4"
          >
              <button>{text}</button>
          </Link>
        );
    }

  return (
    <button 
      className="flex items-center bg-purple-800 space-x-3 text-white opacity-90 hover:opacity-80 cursor-pointer rounded p-2 m-4"
      onClick={onClick}
    >
    {text}
    </button>
  )
}

export default Button