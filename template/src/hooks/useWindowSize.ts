import { useEffect, useState } from 'react'
import _ from 'lodash'

export const useWindowHeight = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const onresize = _.throttle(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }, 300)
    window.addEventListener('resize', onresize)
    onresize()
    return () => {
      window.removeEventListener('resize', onresize)
    }
  }, [])

  return windowSize
}
