import { style } from 'typestyle';

import { Color } from '../../../GlobalStyle';

export const LoginFormStyle = style({
  backgroundColor: Color.white,
  width: '280px',
  $nest: {
    '& .error': {
      color: Color.error,
      fontSize: '12px !important',
      display: 'flex',
      fontFamily: 'Gilroy-Black',
    },
    '& ._logo': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      marginBottom: '50px',
      $nest: {
        '& img': {
          width: '150px',
        }
      }
    },
    '& ._form_content': {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      $nest: {
        '& ._content_form_button': {
          marginTop: '15px',
          marginBottom: '50px',
          display: 'flex',
          justifyContent: 'center',
        },
        '& ._upercase': {
          textTransform: 'uppercase',
        },
      }
    },
    '& .to-register': {
      fontFamily: "Gilroy-Regular",
      fontSize: "16px",
      lineHeight: "15px",
      color: "#FFFFFF",
      marginTop: '-20px',
      marginLeft: '15px',
      cursor: "pointer",
      $nest: {
        '&:hover': {
          color: 'rgba(200,200,200,.8)'
        }
      }
    },
    '& .content-reset': {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '5px',
      $nest: {
        '& .to-reset': {
          fontFamily: "Gilroy-Regular",
          fontSize: "16px",
          lineHeight: "15px",
          color: "#FFFFFF",

          cursor: "pointer",
          $nest: {
            '&:hover': {
              color: 'rgba(200,200,200,.8)'
            }
          }
        }
      }
    },
    '& .content-return': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '5px',
      $nest: {
        '& .to-return': {
          fontFamily: "Gilroy-Regular",
          fontSize: "16px",
          lineHeight: "15px",
          color: "#FFFFFF",

          cursor: "pointer",
          $nest: {
            '&:hover': {
              color: 'rgba(200,200,200,.8)'
            }
          }
        }
      }
    },
  }
})