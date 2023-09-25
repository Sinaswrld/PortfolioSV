import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="cube-container">
        <div className="cube">
          <div style={{ '--x': -1, '--y': 0 }}>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 1 }}></span>
          </div>
          <div style={{ '--x': 0, '--y': 0 }}>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 1 }}></span>
          </div>
          <div style={{ '--x': 1, '--y': 0 }}>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 1 }}></span>
          </div>
        </div>
        <div className="cube">
          <div style={{ '--x': -1, '--y': 0 }}>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 1 }}></span>
          </div>
          <div style={{ '--x': 0, '--y': 0 }}>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 1 }}></span>
          </div>
          <div style={{ '--x': 1, '--y': 0 }}>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 1 }}></span>
          </div>
        </div>
        <div className="cube">
          <div style={{ '--x': -1, '--y': 0 }}>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 1 }}></span>
          </div>
          <div style={{ '--x': 0, '--y': 0 }}>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 1 }}></span>
          </div>
          <div style={{ '--x': 1, '--y': 0 }}>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 1 }}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo
