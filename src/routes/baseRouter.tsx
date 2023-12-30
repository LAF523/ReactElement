import { lazy, Suspense } from 'react';
import { Spin } from 'antd';
// import { Navigate } from 'react-router-dom';

function Loading(Element: React.FC) {
  return (
    <Suspense fallback={<Spin />}>
      <Element />
    </Suspense>
  );
}

const Layout = Loading(lazy(() => import('@/layouts')));
const Button = Loading(lazy(() => import('@/pages/button')));
const Form = Loading(lazy(() => import('@/pages/form')));
const NotFound = Loading(lazy(() => import('@/pages/notFound')));
const router = [
  {
    path: '/',
    element: Layout,
    children: [
      {
        path: '/button',
        element: Button
      },
      {
        path: '/Form',
        element: Form
      },
      {
        path: '*',
        element: NotFound
      }
    ]
  }
];

export default router;
