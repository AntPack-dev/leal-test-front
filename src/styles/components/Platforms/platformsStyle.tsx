import { style } from 'typestyle';
import BannerImage from '../../../assets/images/Hbo/hboBanner1.png';

export const PlatformsStyle = style({
  width: '100%',
  $nest: {
    '& .accordion_container': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: 'auto',
      $nest: {
        '& .accordion':{
          width: '1200px',
          marginBottom: '50px',
          $nest: {
            '@media screen and (max-width: 700px)':{
              width: '100%',
            }
          }
        }
      }
    },
    '& .principal_title':{
      $nest: {
        '@media screen and (max-width: 700px)':{
          padding: '0 24px',
          boxSizing: 'border-box',
          marginTop: '50px',
        }
      }
    },
  }
});