import Vue from 'vue';
export const loadData = ({ commit }) => {
    Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
        if (data) {
            const stock = data.stocks;
            const funds = data.funds;
            const stockPortfolio = data.stockPortfolio;
            const portfolio = {
                stockPortfolio,
                funds
            };
            commit('SET_STOCKS', stock);
            commit('SET_PORTFOLIO', portfolio);

        }
    });
};
export const getInfo = ({ commit }, symbol ) => {
    console.log("getInfo in action")
    Vue.http.get('https://finnhub.io/api/v1/stock/price-target?symbol='+ symbol +'&token=bphm80vrh5rablt51mlg')
    .then(response => response.json())
    .then( data => {
      if (data) {
        console.log(data)
        const symbolInfo = {
            "lastUpdated": data.lastUpdated,
            "symbol": data.symbol,
            "targetHigh": data.targetHigh,
            "targetLow": data.targetLow,
            "targetMean": data.targetMean,
            "targetMedian": data.targetMedian
        }
        console.log(symbolInfo)
        commit('SET_STOCK_INFO', symbolInfo)
      }
    }
    )
  }