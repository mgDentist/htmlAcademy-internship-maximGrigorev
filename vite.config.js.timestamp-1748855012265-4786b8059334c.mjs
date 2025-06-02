// vite.config.js
import { ViteImageOptimizer } from "file:///Users/macbook/Documents/Moksel/frontend/%D1%88%D0%BA%D0%BE%D0%BB%D1%8B/html-academy/accelerator2023/internship/project_Internship/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import VitePluginSvgSpritemap from "file:///Users/macbook/Documents/Moksel/frontend/%D1%88%D0%BA%D0%BE%D0%BB%D1%8B/html-academy/accelerator2023/internship/project_Internship/node_modules/@spiriit/vite-plugin-svg-spritemap/dist/index.js";
import { ViteMinifyPlugin } from "file:///Users/macbook/Documents/Moksel/frontend/%D1%88%D0%BA%D0%BE%D0%BB%D1%8B/html-academy/accelerator2023/internship/project_Internship/node_modules/vite-plugin-minify/dist/index.js";
var vite_config_default = {
  plugins: [
    VitePluginSvgSpritemap("source/img/sprite/*.svg", {
      styles: false,
      injectSVGOnDev: true
    }),
    // input https://www.npmjs.com/package/html-minifier-terser options
    ViteMinifyPlugin({}),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg)$/i,
      includePublic: false,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                convertPathData: {
                  floatPrecision: 2,
                  forceAbsolutePath: false,
                  utilizeAbsolute: false
                },
                removeViewBox: false
                // https://github.com/svg/svgo/issues/1128
              },
              cleanupIDs: {
                minify: false,
                remove: false
              },
              convertPathData: false
            }
          },
          "removeDimensions"
        ]
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
        palette: true
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      // Cache assets in cacheLocation. When enabled, reads and writes asset files with their hash suffix from the specified path.
      cache: true,
      cacheLocation: "./.cache"
    })
  ],
  css: {
    devSourcemap: true
  },
  publicDir: "public",
  root: "./source",
  build: {
    outDir: "../dist"
  },
  base: "./",
  server: {
    port: 3e3
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFjYm9vay9Eb2N1bWVudHMvTW9rc2VsL2Zyb250ZW5kL1x1MDQ0OFx1MDQzQVx1MDQzRVx1MDQzQlx1MDQ0Qi9odG1sLWFjYWRlbXkvYWNjZWxlcmF0b3IyMDIzL2ludGVybnNoaXAvcHJvamVjdF9JbnRlcm5zaGlwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWFjYm9vay9Eb2N1bWVudHMvTW9rc2VsL2Zyb250ZW5kL1x1MDQ0OFx1MDQzQVx1MDQzRVx1MDQzQlx1MDQ0Qi9odG1sLWFjYWRlbXkvYWNjZWxlcmF0b3IyMDIzL2ludGVybnNoaXAvcHJvamVjdF9JbnRlcm5zaGlwL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tYWNib29rL0RvY3VtZW50cy9Nb2tzZWwvZnJvbnRlbmQvJUQxJTg4JUQwJUJBJUQwJUJFJUQwJUJCJUQxJThCL2h0bWwtYWNhZGVteS9hY2NlbGVyYXRvcjIwMjMvaW50ZXJuc2hpcC9wcm9qZWN0X0ludGVybnNoaXAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXInO1xuaW1wb3J0IFZpdGVQbHVnaW5TdmdTcHJpdGVtYXAgZnJvbSAnQHNwaXJpaXQvdml0ZS1wbHVnaW4tc3ZnLXNwcml0ZW1hcCc7XG5pbXBvcnQgeyBWaXRlTWluaWZ5UGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tbWluaWZ5JztcblxuLyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBwbHVnaW5zOiBbXG4gICAgVml0ZVBsdWdpblN2Z1Nwcml0ZW1hcCgnc291cmNlL2ltZy9zcHJpdGUvKi5zdmcnLCB7XG4gICAgICBzdHlsZXM6IGZhbHNlLFxuICAgICAgaW5qZWN0U1ZHT25EZXY6IHRydWUsXG4gICAgfSksXG4gICAgLy8gaW5wdXQgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvaHRtbC1taW5pZmllci10ZXJzZXIgb3B0aW9uc1xuICAgIFZpdGVNaW5pZnlQbHVnaW4oe30pLFxuICAgIFZpdGVJbWFnZU9wdGltaXplcih7XG4gICAgICB0ZXN0OiAvXFwuKGpwZT9nfHBuZ3xzdmcpJC9pLFxuICAgICAgaW5jbHVkZVB1YmxpYzogZmFsc2UsXG4gICAgICBsb2dTdGF0czogdHJ1ZSxcbiAgICAgIGFuc2lDb2xvcnM6IHRydWUsXG4gICAgICBzdmc6IHtcbiAgICAgICAgbXVsdGlwYXNzOiB0cnVlLFxuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3ByZXNldC1kZWZhdWx0JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBvdmVycmlkZXM6IHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwTnVtZXJpY1ZhbHVlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udmVydFBhdGhEYXRhOiB7XG4gICAgICAgICAgICAgICAgICBmbG9hdFByZWNpc2lvbjogMixcbiAgICAgICAgICAgICAgICAgIGZvcmNlQWJzb2x1dGVQYXRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHV0aWxpemVBYnNvbHV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVWaWV3Qm94OiBmYWxzZSwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N2Zy9zdmdvL2lzc3Vlcy8xMTI4XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNsZWFudXBJRHM6IHtcbiAgICAgICAgICAgICAgICBtaW5pZnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlbW92ZTogZmFsc2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbnZlcnRQYXRoRGF0YTogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAncmVtb3ZlRGltZW5zaW9ucycsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgcG5nOiB7XG4gICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNwbmdcbiAgICAgICAgcXVhbGl0eTogODAsXG4gICAgICAgIHBhbGV0dGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBqcGVnOiB7XG4gICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNqcGVnXG4gICAgICAgIHF1YWxpdHk6IDgwLFxuICAgICAgICBwcm9ncmVzc2l2ZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGpwZzoge1xuICAgICAgICAvLyBodHRwczovL3NoYXJwLnBpeGVscGx1bWJpbmcuY29tL2FwaS1vdXRwdXQjanBlZ1xuICAgICAgICBxdWFsaXR5OiA4MCxcbiAgICAgICAgcHJvZ3Jlc3NpdmU6IHRydWVcbiAgICAgIH0sXG4gICAgICAvLyBDYWNoZSBhc3NldHMgaW4gY2FjaGVMb2NhdGlvbi4gV2hlbiBlbmFibGVkLCByZWFkcyBhbmQgd3JpdGVzIGFzc2V0IGZpbGVzIHdpdGggdGhlaXIgaGFzaCBzdWZmaXggZnJvbSB0aGUgc3BlY2lmaWVkIHBhdGguXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgIGNhY2hlTG9jYXRpb246ICcuLy5jYWNoZScsXG4gICAgfSksXG4gIF0sXG4gIGNzczoge1xuICAgIGRldlNvdXJjZW1hcDogdHJ1ZVxuICB9LFxuICBwdWJsaWNEaXI6ICdwdWJsaWMnLFxuICByb290OiAnLi9zb3VyY2UnLFxuICBidWlsZDoge1xuICAgIG91dERpcjogJy4uL2Rpc3QnLFxuICB9LFxuICBiYXNlOiAnLi8nLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICB9XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzZ0IsU0FBUywwQkFBMEI7QUFDemlCLE9BQU8sNEJBQTRCO0FBQ25DLFNBQVMsd0JBQXdCO0FBR2pDLElBQU8sc0JBQVE7QUFBQSxFQUNiLFNBQVM7QUFBQSxJQUNQLHVCQUF1QiwyQkFBMkI7QUFBQSxNQUNoRCxRQUFRO0FBQUEsTUFDUixnQkFBZ0I7QUFBQSxJQUNsQixDQUFDO0FBQUE7QUFBQSxJQUVELGlCQUFpQixDQUFDLENBQUM7QUFBQSxJQUNuQixtQkFBbUI7QUFBQSxNQUNqQixNQUFNO0FBQUEsTUFDTixlQUFlO0FBQUEsTUFDZixVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixLQUFLO0FBQUEsUUFDSCxXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sUUFBUTtBQUFBLGNBQ04sV0FBVztBQUFBLGdCQUNULHNCQUFzQjtBQUFBLGdCQUN0QixpQkFBaUI7QUFBQSxrQkFDZixnQkFBZ0I7QUFBQSxrQkFDaEIsbUJBQW1CO0FBQUEsa0JBQ25CLGlCQUFpQjtBQUFBLGdCQUNuQjtBQUFBLGdCQUNBLGVBQWU7QUFBQTtBQUFBLGNBQ2pCO0FBQUEsY0FDQSxZQUFZO0FBQUEsZ0JBQ1YsUUFBUTtBQUFBLGdCQUNSLFFBQVE7QUFBQSxjQUNWO0FBQUEsY0FDQSxpQkFBaUI7QUFBQSxZQUNuQjtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQTtBQUFBLFFBRUgsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU07QUFBQTtBQUFBLFFBRUosU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBLEtBQUs7QUFBQTtBQUFBLFFBRUgsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLE1BQ2Y7QUFBQTtBQUFBLE1BRUEsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLElBQ2pCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFdBQVc7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
