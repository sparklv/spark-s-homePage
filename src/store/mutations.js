import Vue from 'Vue'
const mutations = {
    changeContent(state, val) {
        state.nowContent = val;
    },
    changeList(state, val) {
        state.articleList = val;
    },
    changeSport(state, val) {
        state.sport = val;
    },
    changeShowScope(state, val) {
        if (val == 'init') {
            state.showScope = [0, 3];
        }
        else {
            Vue.set(state.showScope, 1, state.showScope[1] + val)
        }
    },
    changeBindScroll(state, val) {
        state.isBindScroll = val;
    },
    changeLoading(state, val) {
        state.showLoading = val;
    }
}
export default mutations