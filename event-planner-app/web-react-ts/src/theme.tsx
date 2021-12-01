import { createTheme } from "@material-ui/core";


export const theme = createTheme({
    typography:{
        fontFamily:['Lato', 'DM Serif Display'].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
           body: {
             background: 'linear-gradient(45deg, #000000, 20%, #1d007d, 80%, #3d74ff)',
             backgroundRepeat: "no-repeat",
             backgroundAttachment: "fixed",
          },
        },
      },
    },
    palette: {
      type: "dark",
    },
  })

export default theme;



