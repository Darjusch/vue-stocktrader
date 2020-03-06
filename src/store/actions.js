import Vue from 'vue';
export const loadData = ({ commit }) => {
    Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
        if (data) {
            const stock = data.stocks;
            const funds = data.funds;
            const stockPortfolio = data.stockPortfolio;
            console.log(data)
            const portfolio = {
                stockPortfolio,
                funds
            };
            commit('SET_STOCKS', stock);
            commit('SET_PORTFOLIO', portfolio);

        }
    });
}