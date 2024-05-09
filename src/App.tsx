
import { Link } from "react-router-dom"

export const componentLinks = [
  {
    link: "/inverted-cursor",
  },
  {
    link: "/bento-grid",
  },
]

export default function App() {
  return (
    <>
      <h1 className="font-bold text-3xl uppercase text-center mt-9">
        List of UI Components
      </h1>

      <main className="container mx-auto mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {componentLinks.map((component, index) => (
            <div key={component.link.split('/')[1]} className="p-4 bg-stone-700 hover:bg-stone-600 rounded-md">
              <Link to={component.link} className="flex items-center gap-3 ">
                <span className="text-white">{index + 1}</span>
                  <h1 className="font-bold text-xl capitalize">{component.link.split('/')[1].replace("-"," ")}</h1>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}