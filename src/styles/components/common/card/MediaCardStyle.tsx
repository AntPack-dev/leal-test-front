import { style } from 'typestyle';

import { Color } from '../../../GlobalStyle';

export const MediaCardStyle = style({
  transition: 'transform 0.5s',
  $nest: {
    '& .itemImage': {
      zIndex: 1,
      transitionDuration: '1s',
      $nest: {
        '&:hover': {
          transform: 'scale(1.5)',
        }
      }
    },
    '& .cardBody': {
      zIndex: 10,
    },
    '& .css-1glh7o3': {
      padding: 0
    }
  }
})