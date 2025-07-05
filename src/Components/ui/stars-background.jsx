import { cn } from "../../utils/cn.js";
import { useState, useEffect, useRef, useCallback } from "react"

export const StarsBackground = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const [stars, setStars] = useState([])
  const canvasRef = useRef(null)

  const generateStars = useCallback((width, height) => {
    const area = width * height
    const numStars = Math.floor(area * starDensity)
    return Array.from({ length: numStars }, () => {
      const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.05 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: shouldTwinkle
          ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
          : null,
      }
    })
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed])

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const { width, height } = canvas.getBoundingClientRect()
        canvas.width = width
        canvas.height = height
        setStars(generateStars(width, height))
      }
    }

    updateStars()

    const resizeObserver = new ResizeObserver(updateStars)
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current)
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current)
      }
    }
  }, [generateStars])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const newStars = stars.map((star) => {
        const newOpacity = star.twinkleSpeed !== null
          ? 0.5 + Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5)
          : star.opacity

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${newOpacity})`
        ctx.fill()

        return {
          ...star,
          opacity: newOpacity,
        }
      })

      setStars(newStars)

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [stars])

  return <canvas ref={canvasRef} className={cn("h-full w-full absolute inset-0", className)} />
}
