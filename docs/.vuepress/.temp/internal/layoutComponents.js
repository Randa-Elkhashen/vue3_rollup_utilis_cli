import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Users/RANDA/Desktop/Courses/vue3_rollup_utilis_cli/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("C:/Users/RANDA/Desktop/Courses/vue3_rollup_utilis_cli/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
