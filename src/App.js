import { Tree }     from './components/Tree/Tree';
import style        from './styles/pages/Layout.module.css'

function App() {
    return (
        <div className={style.appContainer}>
            <Tree />
        </div>
    );
};

export default App;
