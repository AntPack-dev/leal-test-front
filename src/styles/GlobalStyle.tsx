import { media, style } from 'typestyle';

export const Color = {
  white: '#fff',
  black: '#000',
  blackBg: '#121212',
  ligthGray: '#d3d3d3',
  gray: '#808080',
  error: '#b22222',
  purple: '#931EE6',
  darkPurple: '#52187C',
  mediumPurple: '#1C0030',
  blue: '#03B2FF',
  ocre: '#E9C387',
  // ...
};

export const title_line = style({
  width: '70px',
  margin: '20px 0',
});

export const carrousel_title = style({
  fontSize: '40px',
  fontFamily: 'Gilroy-Black',
  color: 'white',
  textTransform: 'uppercase',
  $nest:{
    '@media screen and (max-width: 700px)':{
      fontSize: '15px',
    },
  },
});

export const MegaBigLetter = style({
  fontFamily: 'Lato',
  fontSize: '60px',
  fontWeight: 'bold',
  lineHeight: '85px',
});

export const Title = style({
  fontSize: '40px',
  lineHeight: '0.7',
  fontFamily: 'Gilroy-Black',
  paddingTop: '0px',
  marginBottom: '60px',
  textAlign: 'start',
  $nest: {
    '@media screen and (max-width: 700px)':{
      fontSize: '30px',
      lineHeight: '30px',
      marginBottom: '50px',
    }
  }
  // textTransform: 'uppercase',
});

export const SmallTitle = style({
  fontSize: '35px',
  lineHeight: '25px',
  fontFamily: 'Gilroy-Black',
  color: 'rgb(89,89,89)',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginBottom: '25px',
});

export const PrincipalTitle = style(
  {
    fontFamily: 'Lato',
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: '40px',
    color: Color.gray,
  },
  media(
    { maxWidth: '350px' },
    {
      fontSize: '30px',
      lineHeight: '35px',
    },
  ),
);

export const PrincipalLetter = style({
  fontFamily: 'Gilroy-Regular !important',
  fontSize: '18px !important',
  lineHeight: '23px !important',
  letterSpacing: '0.5px !important',
});

export const SmallLetter = style({
  fontFamily: 'Lato',
  fontSize: '15px',
  lineHeight: '24px',
  letterSpacing: '0.25px',
});

export const PrincipalLetter2 = style({
  fontFamily: 'Gilroy-Regular !important',
  fontSize: '19px !important',
  lineHeight: '23px !important',
  letterSpacing: '0.5px !important',
});

export const PrincipalInput = style({
  height: '35px',
  border: '1px solid #d3d3d3',
  marginTop: '10px',
  marginBottom: '10px',
  padding: '0 5px',
  fontFamily: "Gilroy-Regular",
  color: "#C4C4C4",
  $nest: {
    '&:focus': {
      outline: 'none',
      boxShadow: 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
    },
    '&::placeholder': {
      color: "#C4C4C4",
    },
      '& option':{
          fontFamily: "Gilroy-Regular",
          color: "#C4C4C4",
      }
  },
});

export const PrincipalButton = style(
  {
    width: '180px',
    height: '46px',
    border: 'none',
    fontFamily: 'Gilroy-Black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px',
    lineHeight: '24px',
    letterSpacing: '0.25px',
    cursor: 'pointer',
    color: Color.black,
    backgroundColor: Color.white,
    textTransform: 'uppercase',
    //..
  },
  media(
    { maxWidth: '700px' },
    {
      //...
    },
  ),
);


export const PrincipalCard = style({
  maxWidth: '311px',
  height: '340px',
  background: Color.white,
  borderRadius: '8px',
  color: Color.gray,
  boxShadow: '0px 0px 1px rgba(15, 69, 114, 0.1), 0px 2px 4px rgba(15, 69, 114, 0.2)',
  display: 'flex',
  flexDirection: 'column',
});

export const container = style(
  {
    margin: '0 auto',
    padding: '0 0.5em',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '1082px',
  },
  media(
    { maxWidth: '700px' },
    {
      width: '100%',
      maxWidth: '100%',
      padding: '0 17px',
    },
  ),
);
