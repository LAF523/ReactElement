import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';
const Arr = [
  {
    path: '/home',
    url: '../../../pages/home',
    children: [
      {
        path: '/home/aaa',
        url: '../../../pages/about'
      }
    ]
  },
  {
    path: '/about',
    url: '../../../pages/about',
    children: [
      {
        path: '/about/bbb',
        url: '../../../pages/home'
      }
    ]
  }
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Map = (Arr: any[]) => {
  return Arr.map(e => {
    return {
      path: e.path,
      Component: lazy(() => import(e.url)),
      children: e.children && Map(e.children)
    };
  });
};

const router = createBrowserRouter(Map(Arr));

const LayoutMain = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default LayoutMain;
