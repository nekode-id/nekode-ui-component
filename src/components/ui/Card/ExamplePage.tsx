
import { Card, CardBody, CardImage } from "./Card"

export default function ExampleCardPage() {
   return (
      <>
         <main className="bg-slate-100 min-h-svh w-full grid place-items-center">
            <Card>
               <CardImage 
                  // alt="Lorem, ipsum dolor." 
                  src="https://source.unsplash.com/random/700x500/"/>
               <CardBody>
                  <h1 className="text-xl font-semibold capitalize">Lorem, ipsum dolor.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, libero.</p>
               </CardBody>
            </Card>
         </main>
      </>
   )
}