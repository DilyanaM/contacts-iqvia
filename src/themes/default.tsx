import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';

const defaultTheme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  }
});

export default defaultTheme;
