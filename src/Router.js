import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import FriendList from './FriendList';
import MainApp from './MainApp'


/**สร้าง Component */
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/friend-list">
                    <FriendList />
                </Route>
                <Route path="/main-app">
                    <MainApp />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router; /** ส่ง Component ออกไปใช้ */