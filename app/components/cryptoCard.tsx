import { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CryptoCard(cryptoProps) {
  const [textStyle, setTextStyle] = useState(null)
  const [priceChange, setPriceChange] = useState(null)
      
  // useEffect(() => {
  //   if (cryptoProps.change >= 0) {
  //     setTextStyle({ color: 'var(--color-value-increase)' })
  //     // setPriceChange(<FontAwesomeIcon icon="fa-solid fa-caret-up" size="3x" />)
  //   } else {
  //     setTextStyle({ color: 'var(--color-value-decrease)' })
  //     // setPriceChange(<FontAwesomeIcon icon="fa-solid fa-caret-down" size="3x" />)
  //   }
    
  // }, [cryptoProps.change])

  return (
    <article className="crypto-card flex">
      <div className="crypto-card-name flex">
        <img 
          className="crypto-icon"
          src={cryptoProps.icon}
          alt={cryptoProps.name}
        />
        <div className="crypto-name">
          <h3>{cryptoProps.name}</h3>
          <h4>{cryptoProps.symbol}</h4>
        </div>
      </div>

      <div className="crypto-values-container flex">
        <div className="crypto-values">
          <h2>${cryptoProps.price}</h2>
          <div className="crypto-value-change flex">
            <p style={textStyle}>{cryptoProps.change}%</p>
            <span>24h</span>
          </div>
        </div>
        {priceChange}
      </div>
    </article>
  )
}

export default CryptoCard
