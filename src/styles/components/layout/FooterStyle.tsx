import { style } from "typestyle";

const FooterStyle = style({
  padding: '50px 0',
  fontSize: '10px',
  $nest: {
    '& span': {
      display: 'block',
      marginTop: '20px',
      fontFamily: 'Gilroy-Bold',
      $nest: {
        '& a': {
          textDecoration: 'none',
        },
      }
    },
    '& .politics': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      $nest: {
        '@media screen and (max-width: 700px)': {
          flexDirection: 'column',
        }
      }
    },
    '& .wrapper': {
      $nest: {
        '& .politics': {

        },
        '@media screen and (max-width: 700px)': {
          width: '100%',
          // justifyContent: 'center',
        },
      }
    },
    '@media screen and (max-width: 700px)': {
      // width: '85%',
      display: 'flex',
      padding: '50px 25px',
    },
  }
})

export default FooterStyle;