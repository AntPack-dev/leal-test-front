import { style } from 'typestyle';
import { Color } from '../../GlobalStyle';

export const ResetPaswordStyle = style({
  backgroundColor: Color.blackBg,
  padding: '50px',
  height: '90vh',
  $nest: {
    '& .error': {
      color: Color.error,
      fontSize: '12px !important',
      display: 'flex',
      fontFamily: 'Gilroy-Black',
    },
    '& ._content_brands': {
      maxWidth: '600px',
      $nest: {
        '& ._brands': {
          width: '100%',
        },
      }
    },
    '& ._Reset-form': {
      height: '80%',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      $nest: {
        '& ._form_content': {
          display: 'flex',
          flexDirection: 'column',
          padding: '0 10px',
          $nest: {
            '& ._content_form_button': {
              display: 'flex',
              justifyContent: 'center',
              marginTop: '35px',
              $nest: {
                '& ._form_button': {
                  borderRadius: '50px',
                  border: `2px solid ${Color.ocre}`,
                  backgroundColor: Color.blackBg,
                  color: Color.white,
                },
              }
            },
          }
        },
      }
    },
  }
})