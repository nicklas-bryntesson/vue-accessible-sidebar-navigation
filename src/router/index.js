import { createRouter, createWebHistory } from "vue-router";
import Page1 from "../views/Page1.vue";
import Page1_1 from "../views/Page1_1.vue";
import Page1_2 from "../views/Page1_2.vue";
import Page1_2_1 from "../views/Page1_2_1.vue";
import Page1_2_2 from "../views/Page1_2_2.vue";
import Page1_2_2_1 from "../views/Page1_2_2_1.vue";
import Page1_2_2_2 from "../views/Page1_2_2_2.vue";
import Page1_2_3 from "../views/Page1_2_3.vue";
import Page2 from "../views/Page2.vue";
import Page3 from "../views/Page3.vue";
import Page4 from "../views/Page4.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/page-1",
  },
  {
    path: "/page-1",
    component: Page1,
    meta: { title: "Page 1" },
    children: [
      {
        path: "page-1-1",
        component: Page1_1,
        meta: { title: "Page 1-1" },
      },
      {
        path: "page-1-2",
        component: Page1_2,
        meta: { title: "Page 1-2" },
        children: [
          {
            path: "page-1-2-1",
            component: Page1_2_1,
            meta: { title: "Page 1-2-1" },
          },
          {
            path: "page-1-2-2",
            component: Page1_2_2,
            meta: { title: "Page 1-2-2" },
            children: [
              {
                path: "page-1-2-2-1",
                component: Page1_2_2_1,
                meta: { title: "Page 1-2-2-1" },
              },
              {
                path: "page-1-2-2-2",
                component: Page1_2_2_2,
                meta: { title: "Page 1-2-2-2" },
              },
            ],
          },
          {
            path: "page-1-2-3",
            component: Page1_2_3,
            meta: { title: "Page 1-2-3" },
          },
        ],
      },
    ],
  },
  {
    path: "/page-2",
    component: Page2,
    meta: { title: "Page 2" },
  },
  {
    path: "/page-3",
    component: Page3,
    meta: { title: "Page 3" },
  },
  {
    path: "/page-4",
    component: Page4,
    meta: { title: "Page 4" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: { title: "404 Not Found" },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

// This callback runs before every route change
router.beforeEach((to, from, next) => {
  // This sets the page title from the route meta
  document.title = to.meta.title || "Default Page Title";
  next();
});

export default router;
