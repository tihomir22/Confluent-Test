import React from "react";
import "./App.scss";
import Movies from "./pages/Movies";
import Sources from "./pages/Sources";

function App() {
  return (
    <div className="App">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hollywood Movies</title>
        <meta name="description" content="Hollywood Movies" key="desc" />
        <meta property="og:title" content="Hollywood Movies" />
        <meta property="og:description" content="Hollywood Movies" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"></link>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"></link>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"></link>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"></link>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"></link>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"></link>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"></link>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"></link>
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <Movies></Movies>
      <Sources></Sources>
    </div>
  );
}

export default App;
