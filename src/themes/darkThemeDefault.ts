import { muiThemeBase } from '@libs/neumorphism-ui/themes/muiThemeBase';
import { createTheme } from '@mui/material/styles';

// TERRA THEME TO FILL IN VARIABLE THEME
const GREEN_100 = '#15cc93';
const GREEN_200 = '#4BDB4B';
const GREEN_300 = 'rgba(75, 219, 75, 0.1)';
//const GREEN_400 = '#285e28';
const GREEN_500 = '#36a337';
const GREEN_600 = '#2d832d';
const GREEN_700 = '#246d25';
const GREEN_800 = '#174f1a';
const GREEN_900 = '#0e3311';
const RED_100 = '#e95979';
const YELLOW_100 = '#ff9a63';
const GRAY_200 = '#101010';
const GRAY_0 = '#7B7B7B';

// DEFAULT DARK THEME VARIABLES FOR CONSTANTS
export const DARK_BLUE_100 = '#0b1801';
export const DARK_BLUE_200 = '#142b03';
export const DARK_BLUE_300 = '#1e3806';
export const DARK_BLUE_400 = 'rgba(74, 110, 28, 0.05)';
export const DARK_BLUE_500 = '#1a2f07';
export const DARK_BLUE_600 = '#152407';
export const DARK_BLUE_700 = '#5A8514';
export const DARK_BLUE_800 = '#619B13';

export const DARK_RED_200 = '#ac2b45';
export const DARK_YELLOW_200 = '#d69f34';
export const DARK_GRAY_100 = 'rgba(255, 255, 255, 0.5)';
export const DARK_GRAY_300 = 'rgba(0, 0, 0, 0.3)';
export const DARK_GRAY_400 = 'rgba(255, 255, 255, 0.2)';

export const BLACK = '#000000';
export const WHITE = '#FFFFFF';

export const defaultDarkTheme = {
  ...createTheme({
    ...muiThemeBase,
    palette: {
      primary: {
        main: GREEN_100,
      },
      secondary: {
        main: GREEN_200,
      },
      text: {
        primary: WHITE,
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            color: WHITE,
          },
          input: {
            color: WHITE,
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            color: WHITE,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            color: WHITE,
          },
        },
      },
      MuiDialogContentText: {
        styleOverrides: {
          root: {
            color: WHITE,
          },
        },
      },
    },
  }),
  MuiTouchRipple: {
    root: {
      opacity: 0.15,
    },
  },
  palette_type: 'dark',
  MuiTableRow: {
    root: {
      '&:last-child td': {
        borderBottom: 0,
      },
    },
  },

  // VARIABLES (SHOULD BE CHANGED)
  textColor: WHITE,
  dimTextColor: DARK_GRAY_100,

  colors: {
    positive: GREEN_100,
    negative: RED_100,
    warning: YELLOW_100,
    primary: GREEN_100,
    primaryDark: GREEN_100,
    secondary: GREEN_100,
    secondaryDark: GREEN_100,
  },

  header: {
    backgroundColor: BLACK,
    textColor: GREEN_200,
  },

  messageBox: {
    borderColor: GREEN_200,
    backgroundColor: GREEN_300,
    textColor: GREEN_100,
    linkColor: GREEN_200,
  },

  chart: [
    GREEN_200,
    GREEN_500,
    GREEN_600,
    GREEN_700,
    GREEN_800,
    GREEN_900,
    GRAY_200,
  ],
  liquidationChart: {
    lineColor: GRAY_0,
  },

  // CONSTANTS (CAN BE DEFAULT)
  intensity: 0.45,
  backgroundColor: DARK_BLUE_100,
  sectionBackgroundColor: DARK_BLUE_200,
  highlightBackgroundColor: DARK_BLUE_300,
  hoverBackgroundColor: DARK_BLUE_400,

  label: {
    backgroundColor: DARK_BLUE_300,
    textColor: WHITE,
    borderColor: DARK_GRAY_100,
  },

  actionButton: {
    backgroundColor: DARK_BLUE_300,
    backgroundHoverColor: DARK_BLUE_500,
    textColor: WHITE,
    hoverTextColor: WHITE,
  },

  textButton: {
    textColor: WHITE,
  },

  borderButton: {
    borderColor: DARK_BLUE_300,
    borderHoverColor: DARK_BLUE_500,
    textColor: WHITE,
    hoverTextColor: WHITE,
  },

  selector: {
    backgroundColor: DARK_BLUE_100,
    textColor: WHITE,
  },

  formControl: {
    labelColor: WHITE,
    labelFocusedColor: DARK_BLUE_600,
    labelErrorColor: DARK_RED_200,
  },

  textInput: {
    backgroundColor: DARK_BLUE_100,
    textColor: WHITE,
  },

  table: {
    head: {
      textColor: DARK_GRAY_100,
    },
    body: {
      textColor: WHITE,
    },
  },

  slider: {
    thumb: {
      shadowColor: DARK_GRAY_300,
      thumbColor: WHITE,
    },
  },

  skeleton: {
    backgroundColor: DARK_GRAY_400,
    lightColor: DARK_GRAY_400,
  },

  dialog: {
    normal: {
      backgroundColor: DARK_BLUE_200,
      textColor: WHITE,
    },
    warning: {
      backgroundColor: DARK_BLUE_200,
      textColor: DARK_YELLOW_200,
    },
    error: {
      backgroundColor: DARK_BLUE_200,
      textColor: DARK_RED_200,
    },
    success: {
      backgroundColor: DARK_BLUE_200,
      textColor: DARK_BLUE_700,
    },
  },

  tooltip: {
    normal: {
      backgroundColor: DARK_BLUE_800,
      textColor: WHITE,
    },
    warning: {
      backgroundColor: DARK_YELLOW_200,
      textColor: WHITE,
    },
    error: {
      backgroundColor: DARK_RED_200,
      textColor: WHITE,
    },
    success: {
      backgroundColor: DARK_BLUE_700,
      textColor: WHITE,
    },
  },

  snackbar: {
    normal: {
      backgroundColor: DARK_BLUE_800,
      textColor: WHITE,
    },
    warning: {
      backgroundColor: DARK_YELLOW_200,
      textColor: WHITE,
    },
    error: {
      backgroundColor: DARK_RED_200,
      textColor: WHITE,
    },
    success: {
      backgroundColor: DARK_BLUE_700,
      textColor: WHITE,
    },
  },
};
