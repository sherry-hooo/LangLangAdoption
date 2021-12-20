module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/LangLangAdoption/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@use "@/assets/sass/abstract/_breakpoint.scss";
        @use "@/assets/sass/abstract/_color.scss";
        `,
      },
    },
  },
};
