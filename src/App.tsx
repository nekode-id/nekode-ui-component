
import { Link } from "react-router-dom"

export const componentLinks = [
  {
    link: "/inverted-cursor",
  },
  {
    link: "/bento-grid",
  },
  {
    link: "/navbar",
  },
  {
    link: "/card",
  },
]

export default function App() {
  return (
    <>
      <h1 className="font-bold text-3xl uppercase text-center mt-9">
        List of UI Components
      </h1>

      <main className="container mx-auto mt-32 px-5">
        <div className="flex flex-wrap gap-4">
          {componentLinks.map((component, index) => (
            <Link 
              to={component.link}
              key={component.link.split('/')[1]} 
              className="p-4 bg-stone-900 hover:bg-gradient-to-b hover:from-stone-800 active:scale-[.9] transition duration-150 hover:to-stone-700 rounded-lg flex items-center gap-3 ">
                <span className="text-white">{index + 1}</span>
                  <h1 className="font-bold text-xl capitalize text-white">{component.link.split('/')[1].replace("-"," ")}</h1>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}