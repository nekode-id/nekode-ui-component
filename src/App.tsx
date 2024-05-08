
import { Link } from "react-router-dom"
import InvertedCursor from "./components/ui/InvertedCursor/InvertedCursor"

export const componentLinks = [
  {
    link: "/inverted-cursor",
    element: <InvertedCursor />
  }
]

export default function App() {
  return (
    <>
      <h1 className="font-bold text-3xl uppercase text-center mt-9">
        List of UI Components
      </h1>

      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {componentLinks.map((component) => (
            <div key={component.link.split('/')[1]} className="p-4">
              <Link to={component.link} className="hover:underline">
                  <h1 className="font-bold text-xl capitalize">{component.link.split('/')[1]}</h1>
              </Link>
              {component.element}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}