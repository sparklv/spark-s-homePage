const mutations = {
    changeContent(state, val) {
        state.nowContent = val;
    },
    changeList(state, val) {
        state.articleList = val;
    },
    changeSport(state, val) {
        state.sport = val;
    }
}
export default mutations