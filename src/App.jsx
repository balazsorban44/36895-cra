import React, { useEffect, useState } from "react"

export default function FramerElement() {
  const [FramerComponent, setFramerComponent] = useState(false)
  const url = "https://framer.com/m/Tip-6qB7.js"

  useEffect(() => {
    import(/* webpackIgnore: true */ url).then((mod) => {
      console.log(mod)
      setFramerComponent(mod.default)
    })
  }, [])

  if (!FramerComponent) return <></>

  return <FramerComponent />
}
