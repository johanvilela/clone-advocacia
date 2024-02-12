import logo from "/logo.svg"
import imgUrl from './assets/vilela-logo.png'

export function App() {
  return (
    <>
      <div className="h-40 bg-slate-950 flex items-center">
        <div className="flex gap-2">
          <img src={logo} alt="logo" className="h-16"/>
          <img src={imgUrl} alt="logo" className="h-16"/>
        </div>
      </div>
    </>
  )
}
