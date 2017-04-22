import dva from 'dva';
import './index.html';
import './index.css';
import createLoading from 'dva-loading';
import { message } from 'antd';

// 1. Initialize
const app = dva({
  onError(error) {
    message.error(error.message)
    console.log(error)
  }
});

// 2. Plugins
app.use(createLoading());

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
