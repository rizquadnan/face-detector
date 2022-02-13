import Particles from "react-tsparticles";
import options from "./config.json";

export const particleColor = "#4EA699";

export const particleOptions = {
  ...options,
  particles: {
    ...options.particles,
    color: {
      value: particleColor
    },
    links: {
      ...options.particles.links,
      color: {
        value: particleColor
      }
    }
  }
};

const ParticlesBackground = ({ children }) => {
  return (
    <>
      <div style={{ position: "relative", zIndex: -1 }}>
        <Particles
          id="tsparticles"
          options={particleOptions}
        />
      </div>
      { children }
    </>
  )
};

export { ParticlesBackground };