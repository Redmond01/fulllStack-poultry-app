const axios = require('axios')

const tries = async function () {
    const url = 'http://api.football-data.org/v4/competitions/2123/matches?matchday=1'
    const fetch = await axios.get(url)
    const reslut = fetch.data
    console.log(reslut);
}
tries()
//  -H "X-Unfold-Goals: true"