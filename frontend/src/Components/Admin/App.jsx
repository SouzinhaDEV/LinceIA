<<<<<<< HEAD
import Header from "./Header_Admin/Header"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
=======
import Header from "./Header_Admin/Header";
>>>>>>> 77251d2ed3e4ea792162b78054db9137550af975


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