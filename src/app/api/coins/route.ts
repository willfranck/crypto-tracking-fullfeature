import { NextResponse } from 'next/server'
import axios from 'axios'


export async function GET() {
  try {
    const defaultOptions = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
      },
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',  //USD
      },
    }

    
    const res = await axios.request(defaultOptions)
    const coinData = res.data

    return NextResponse.json(coinData, { status: 200 })

  } catch (error: any) {
      console.error(error)
      return NextResponse.json({ error: error.message }, { status: 500 })
  }
}



//******** Params Options ********//

  // 'uuids[0]': 'Qwsogvtv82FCd',  //Bitcoin
  // 'uuids[1]': 'razxDUgYGNAdQ',  //Ethereum
  // 'uuids[2]': 'a91GCGd_u96cF',  //Dogecoin
  // 'uuids[3]': 'D7B1x_ks7WhV5',  //Litecoin
  // 'uuids[4]': '-l8Mn2pVlRs-p',  //XRP
  // 'uuids[5]': '1evaOJpHs',  //XMON
  // 'uuids[6]': 'YRTkUcMi',  //Pax Gold
  // 'uuids[7]': 'zNZHO_Sjf',  //Solana
  // 'uuids[8]': '25W7FG7om',  //Polkadot
  // 'uuids[9]': 'qzawljRxB5bYu',  //Cardano
  // 'uuids[10]': 'qFakph2rpuMOL',  //Maker
  // 'uuids[11]': 'sCDE9K1b',  //Unisocks
  // 'uuids[12]': '3mVx2FX_iJFp5',  //Monero
  // 'uuids[13]': 'WcwrkfNI4FUAe',  //BNB
  // 'uuids[14]': 'vd4-RU816',  //SHAKE token
  // 'uuids[15]': 'U9dzZFwIyMq19',  //42 Coin
  // 'uuids[16]': 'ZlZpzOJo43mIo',  //Bitcoin Cash
  // 'uuids[17]': 'qUhEFk1I61atv',  //TRON

  // orderBy: 'price',
  //Allowed values: price, marketCap, 24hVolume, change, listedAt

  // orderDirection: 'desc',
  //Allowed values: desc, asc

  // search: '',  //String search

  // 'tags[]': '',
  //Allowed values: defi, stablecoin, nft, dex, exchange, staking, dao, meme, privacy

  // 'tiers[]': '1',
  //Allowed values: 1, 2, 3

  // limit: '12',
  //Integer value
