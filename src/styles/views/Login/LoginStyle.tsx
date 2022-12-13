import { style } from 'typestyle';

import { Color } from '../../GlobalStyle';

export const LoginStyle = style({
  backgroundColor: Color.blackBg,
  $nest: {
    '& .ctn-btn-login': {
      zIndex: 9999,
      textAlign: 'right',
      $nest: {
        '& .btns': {
          display: 'flex',
          justifyContent: 'start',
          gridGap: '10px',
          $nest: {
            '@media screen and (max-width: 700px)': {
              width: '100%',
              justifyContent: 'center',
            }
          }
        }
      }
    },
    '& .login_button': {
      cursor: 'pointer',
      textTransform: 'uppercase',
      height: '40px',
      width: '150px',
      backgroundColor: 'white',
      outline: 'none',
      border: 'none',
      fontFamily: 'Gilroy-Black',
      fontSize: '16px',
      textAlign: 'center',
      borderRadius: '50px'
    },
    '& .regístrate_button': {
      cursor: 'pointer',
      textTransform: 'uppercase',
      height: '40px',
      width: '150px',
      backgroundColor: 'white',
      outline: 'none',
      border: 'none',
      fontFamily: 'Gilroy-Black',
      fontSize: '16px',
      textAlign: 'center',
      borderRadius: '50px',
    },
    '& ._platform_cards': {
      marginTop: '55px',
      $nest: {
        '& ._containers_cards': {
          display: 'flex',
          justifyContent: 'space-between',
          $nest: {
            '@media screen and (max-width: 700px)': {
              flexDirection: 'column',
              gap: '30px',
              width: '90%',
            }
          }
        },
        '& .wrapper': {
          $nest: {
            '@media screen and (max-width: 700px)': {
              width: '100%',
            }
          }
        },
        '@media screen and (max-width: 700px)': {
          width: '100%',
        }
      }
    },
    '& .login_hero_container': {
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh',
      $nest: {
        '& ._container': {
          padding: '40px',
        },
        '& h1': {
          fontFamily: 'Gilroy-Black',
          color: 'white',
          fontSize: '60px',
          maxWidth: '670px'
        },
        '& p': {
          fontFamily: 'Gilroy-Medium',
          fontSize: '20px',
          lineHeight: '30px',
          color: 'white',
          maxWidth: '490px',
          margin: '30px 0'
        },
        '& button': {
          cursor: 'pointer',
          textTransform: 'uppercase',
          height: '60px',
          width: '200px',
          backgroundColor: 'white',
          outline: 'none',
          border: 'none',
          fontFamily: 'Gilroy-Black',
          fontSize: '20px',

        }
      }
    },
    '& .form_login': {
      display: 'flex',
      flexDirection: 'column',
      $nest: {
        '& .label_form': {
          display: 'flex',
          flexDirection: 'column',
          marginTop: '25px',
          color: Color.gray,
        },
        '& .form_button': {
          marginTop: '25px',
        },
      },
    },
    '& ._container_bg_mobil': {
      paddingTop: '150px',
      $nest: {
        '& ._bg_mobil': {
          width: '100%',
        }
      }
    }
  },
});
