import Header from "./Header_Admin/Header"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App () {

    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    
    return(
    <div className="font-quickSand">
        <Header />
    </div>
    );
};
export default App 