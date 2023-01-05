import React from 'react';
import ReactDOM from 'react-dom/client';
import {Paper} from '@mui/material';

import {tableOrderColumnStructure, tableOrderSubRowStructure} from 'src/AppRT/store/apiStructure/dataCampaigns';
import {tableTotalData} from 'src/AppRT/store/apiStructure/dataTotalApiHardcode';
import TableRT from 'src/LibRT/table/Table';


export const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <div className='campaignTableDeck'>
      <div className='campaignDataTable'>
        <Paper
          sx={{
            width: '100%',
            // overflow: 'scroll',
            // maxHeight: 'auto',
            overflow: 'hidden',
            maxHeight: '100vh',
          }}
        >
          <TableRT
            className=''
            subRowStructure={tableOrderSubRowStructure}
            tableColumnStructure={tableOrderColumnStructure}
            tableData={tableTotalData}
          />
        </Paper>
      </div>
    </div>
);