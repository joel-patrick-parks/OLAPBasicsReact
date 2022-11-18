import './App.css';
import '@grapecity/wijmo.styles/wijmo.css';
import { getOrderList } from './data';

import * as wjOlap from '@grapecity/wijmo.olap';
import * as wjcOlap from '@grapecity/wijmo.react.olap';

import { useState } from 'react';

function App() {
  const [ng, setNG] = useState(new wjOlap.PivotEngine({
    itemsSource: getOrderList(1000),
    fields: [
      { binding: 'date', header: 'Quarter', format: '\"Q\"q yyyy' },
      { binding: 'date', header: 'Month', format: 'MMMM' },
      { binding: 'agent', header: 'Agent' },
      { binding: 'region', header: 'Region' },
      { binding: 'platform', header: 'Platform' },
      { binding: 'product', header: 'Product' },
      { binding: 'sales', header: 'Sales', format: 'c2' },
      { binding: 'downloads', header: 'Downloads', format: 'n0' },
      { binding: 'revenue', header: 'Revenue', format: 'c2' },
    ]
  }));
  return (
    <div className="App">
      <div className='flextable'>
        <wjcOlap.PivotPanel itemsSource={ng}></wjcOlap.PivotPanel>
        <wjcOlap.PivotGrid itemsSource={ng}></wjcOlap.PivotGrid>
      </div>
      <wjcOlap.PivotChart itemsSource={ng} showTitle={false} showLegend={'Auto'}></wjcOlap.PivotChart>
    </div>
  );
}

export default App;
