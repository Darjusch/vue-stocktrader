const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    'BUY_STOCKS'(state, {stockID, stockPrice, quantity}) {
        const record = state.stocks.find(element => element.id == stockID);
        if (record) {
            record.quantity = record.quantity + quantity;
        } 
        else{
            state.stocks.push({
                id: stockID,
                quantity: quantity
            })

        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCKS'(state,{stockID, stockPrice, quantity}) {
        const record = state.stocks.find(element => element.id == stockID);
        if (record.quantity > quantity) {
            record.quantity = record.quantity - quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    'SET_PORTFOLIO'(state, portfolio){
        state.funds = portfolio.funds
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock({ commit }, order){
        commit('SELL_STOCKS', order);
    }
};

const getters = {
    stockPortfolio ( state, getters ) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price,
                symbol: stock.symbol
            }
        });
    },
    funds (state) {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}