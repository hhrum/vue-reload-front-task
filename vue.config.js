module.exports = {
    publicPath: '/vue-reload-front-task/',
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@import "~@/assets/style/main.scss";'
            }
        }
    },
}