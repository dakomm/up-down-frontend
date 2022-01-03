import React from 'react';
import ReactDOM from 'react-dom';
import KrStocks from './components/KrStocks';
import TopBar from './components/TopBar';

ReactDOM.render(
<React.StrictMode>
  <div>
    <TopBar/>
    <KrStocks/>
  </div>
</React.StrictMode>,
document.getElementById('root')
);