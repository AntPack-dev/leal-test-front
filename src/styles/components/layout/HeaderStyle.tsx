import { style } from 'typestyle';

import { Color } from '../../GlobalStyle';

export const HeaderStyle = style({
  position: 'fixed',
  zIndex: 99,
  backgroundColor: '#121212',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  width: '100%',
  top: '0px',
  alignItems: 'center',
  padding: '20px 30px',
  color: Color.white,
  boxSizing: 'border-box',
  $nest: {
    '@media screen and (max-width: 700px)': {
      padding: '20px 20px',
    },
    '& .header_contain': {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      maxWidth: '1380px',
      margin: 'auto'
    },
    '& .header_link': {
      cursor: 'pointer',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      $nest: {
        '& p': {
          color: 'rgb(165,165,165)',
          fontSize: '12px'
        },
        '& img': {
          margin: '0 10px',
          borderRadius: '50%',
          border: 'solid 2px rgb(255,255,255,0.5)',
          maxHeight: '35px',
          maxWidth: '35px',
          height: '35px',
          width: '35px',
          $nest: {
            '@media screen and (max-width: 700px)': {
              marginRight: '0'
            },
          }
        }
      }
    },
    '& .menu_list': {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      alignItems: 'center',
      gridColumnGap: '8px',
      lineHeight: '9px',
      $nest: {
        '& .logo-company': {
          marginRight: '32px',
        },
        '& a': {
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '11px',
          textDecoration: 'none',
        },
        '& .active': {
          color: '#FF5600',
          $nest: {
            '&.wanermedia': {
              // color: '#E8C47E'
              color: '#808080'
            },
            '&.hbo-max': {
              color: '#931EE6'
            },
            '&.hbo': {
              color: '#03B2FF'
            }
          }
        }
      }
    },
    '& .menu_list_mobile': {
      $nest: {
        '& .active': {
          color: '#FF5600',
          $nest: {
            '&.wanermedia': {
              color: '#808080'
            },
            '&.hbo-max': {
              color: '#931EE6'
            },
            '&.hbo': {
              color: '#03B2FF'
            }
          }
        }
      }
    },
    '& .submenu_container': {
      background: '#050505',
      border: '1px solid #877070',
      borderRadius: '10px',
      width: '200px',
      position: 'absolute',
      padding: '15px',
      top: 55,
      right: 0,
      $nest: {
        '& .submenu_list': {
          position: 'relative',
          listStyle: 'none',
          textTransform: 'uppercase',
          fontFamily: 'Gilroy-Bold',
          fontSize: '14px',
          $nest: {
            '& li': {
              margin: '10px 0',
              $nest: {
                '& a': {
                  textDecoration: 'none',
                  color: 'white',
                  cursor: 'pointer',
                },
                '& button': {
                  textDecoration: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  textTransform: 'uppercase',
                  fontFamily: 'Gilroy-Bold',
                  fontSize: '14px',
                },
              }
            },
          }
        },
        '& .ctn-links': {
          position: 'relative'
        },
        '& .rectangule': {
          position: 'absolute',
          width: '34.74px',
          height: '34.74px',
          right: 0,
          top: -35,
          background: '#050505',
          border: '1px solid #877070',
          boxSizing: 'border-box',
          borderRadius: '4.34295px',
          transform: 'rotate(-45deg)',
        },
        '& .rectangule2': {
          position: 'absolute',
          width: '54.74px',
          height: '64.74px',
          right: -8,
          top: -25,
          background: '#050505',
        },
      }
    }
  },
});
