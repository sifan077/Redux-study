import ReactDOM from "react-dom/client";

import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd'
import './util/http'
// import App from "./views/App";
import App from "./views/ReduxApp";

import {Provider} from 'react-redux'
import store from "./store/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <App/>
        </ConfigProvider>
    </Provider>
);
