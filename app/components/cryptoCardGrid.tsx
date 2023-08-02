import { useState, useEffect } from 'react'
import axios from 'axios'
import CryptoCard from './cryptoCard'

function CryptoCardGrid() {
  const [currencies, setValues] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',  //USD
        
        'uuids[0]': 'Qwsogvtv82FCd',     //Bitcoin
        'uuids[1]': 'razxDUgYGNAdQ',     //Ethereum
        'uuids[2]': 'a91GCGd_u96cF',     //Dogecoin
        'uuids[3]': 'D7B1x_ks7WhV5',     //Litecoin
        'uuids[4]': '-l8Mn2pVlRs-p',     //XRP
        'uuids[5]': '1evaOJpHs',         //XMON
        'uuids[6]': 'YRTkUcMi',          //Pax Gold
        'uuids[7]': 'zNZHO_Sjf',         //Solana
        'uuids[8]': '25W7FG7om',         //Polkadot
        'uuids[9]': 'qzawljRxB5bYu',     //Cardano
        'uuids[10]': 'qFakph2rpuMOL',    //Maker
        'uuids[11]': 'sCDE9K1b',         //Unisocks
        'uuids[12]': '3mVx2FX_iJFp5',    //Monero
        'uuids[13]': 'WcwrkfNI4FUAe',    //BNB
        'uuids[14]': 'vd4-RU816',        //SHAKE token
        'uuids[15]': 'U9dzZFwIyMq19',    //42 Coin
        'uuids[16]': 'ZlZpzOJo43mIo',    //Bitcoin Cash
        'uuids[17]': 'qUhEFk1I61atv',    //TRON

        orderBy: '24hVolume',            //Allowed values: price, marketCap, 24hVolume, change, listedAt
        orderDirection: 'desc',          //Allowed values: desc, asc
        // search: '',                   //String search
        // 'tags[i]': '',                //Allowed values: defi, stablecoin, nft, dex, exchange, staking, dao, meme, privacy
        // 'tiers[i]': '',               //Allowed values: 1, 2, 3
        // limit: ''                     //Integer value
      },
      headers: {
        'X-RapidAPI-Key': 'd2ee1c07d9msh25026da6e7295fbp1272bajsn28ee4f973b89',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    }

    const fetchCoins = async () => {
      await axios
        .request(options)
        .then((response) => {
          console.log(response.data)
          setValues(response.data)
        })
        .catch((err) => {
          console.error(err)
        })
    }

    fetchCoins()
    setInterval(fetchCoins, 30000)
  }, [])


  return (
    <section className='crypto-card-container grid'>
      {currencies &&
        currencies.data.coins.map((coin: string) => (
          <CryptoCard
            // key={coin.uuid}
            // icon={coin.iconUrl}
            // name={coin.name}
            // symbol={coin.symbol}
            // price={Number(Math.round(100 * coin.price) / 100).toFixed(2)}
            // change={coin.change}
          />
      ))}
      <div className='spacerA'></div>
      <div className='spacerB'></div>
    </section>
  )
}

export default CryptoCardGrid
