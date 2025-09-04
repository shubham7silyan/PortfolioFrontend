import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Lazy load components for code splitting
const Nav = lazy(() => import('./components/navbar'));
const Fpage = lazy(() => import('./components/Fpage'));
const Aboutt = lazy(() => import('./components/about'));
const Skil = lazy(() => import('./components/skills'));
const ProjectShowcase = lazy(() => import('./components/ProjectShowcase'));
const Contact = lazy(() => import('./components/contact'));
const Footer = lazy(() => import('./components/footer'));

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#000',
    color: '#dc3545'
  }}>
    <div>Loading...</div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Nav ani="fade-down" />
      <Suspense fallback={<div style={{height: '100vh', background: '#000'}} />}>
        <Fpage ani="fade-left" />
      </Suspense>
      <Suspense fallback={<div style={{height: '50vh', background: '#000'}} />}>
        <Aboutt ani="fade-right" anim="flip-left" anima="flip-down" />
      </Suspense>
      <Suspense fallback={<div style={{height: '50vh', background: '#000'}} />}>
        <Skil />
      </Suspense>
      <Suspense fallback={<div style={{height: '50vh', background: '#000'}} />}>
        <ProjectShowcase />
      </Suspense>
      <Suspense fallback={<div style={{height: '50vh', background: '#000'}} />}>
        <Contact animzz="fade-right" animz="flip-down" />
      </Suspense>
      <Suspense fallback={<div style={{height: '20vh', background: '#000'}} />}>
        <Footer />
      </Suspense>
    </Suspense>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
