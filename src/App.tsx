import { Nav } from "./components/nav"
import { Slider } from "./components/slider"

export function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="-z-20 relative">
        <Slider />
      </main>
    </>
  )
}
