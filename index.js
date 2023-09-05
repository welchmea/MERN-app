import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './frontend-welchmea/src/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// server static assets if in production
if(process.env.NODE_ENV === 'production'){    
  App.use(express.static('frontend/build'))  // set static folder 
  //returning frontend for any route other than api 
  App.get('*',(req,res)=>{     
      res.sendFile (path.resolve(__dirname,'frontend','build',         
                    'index.html' ));    
  });
}
