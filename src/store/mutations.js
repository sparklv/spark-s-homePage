const mutations = {
    changeContent(state, val) {
        state.nowContent = val;
    },
    changeList(state, val) {
        state.articleList = val;
    }
}
export default mutations