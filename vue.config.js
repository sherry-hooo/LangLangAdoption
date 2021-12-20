module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/LangLangAdoption/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@use "@/assets/scss/abstract/_breakpoint.scss";
        @use "@/assets/scss/abstract/_typography.scss";
        @use "@/assets/scss/abstract/_color.scss";
        `,
      },
    },
  },
};
