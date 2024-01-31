import AppHeader from "../appHeader/AppHeader";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spinner from "../spinner/spinner";
//Динамические импорты всегда после статических имортов
const Page404 = lazy(() => import('../pages/404'));
const ComicsPage = lazy(() => import('../pages/comicsPage'));
const MainPage = lazy(() => import('../pages/mainPage'));
const SingleComicPage = lazy(() => import('../pages/SIngleComicPage'));

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route  path="/" element={<MainPage/>}/>
                            <Route  path="/comics" element={<ComicsPage/>}/>
                            <Route  path="/comics/:comicId" element={<SingleComicPage/>}/>
                            <Route  path="*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                    
                </main>
            </div>
        </Router>

    )
}

export default App;