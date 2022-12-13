import { style } from "typestyle";


const  ModalComponentStyle = style({
  width: '100%',
  $nest: {
    '& .MuiBox-root': {
        // boxSizing: 'border-box',
    },
  }
})


export default ModalComponentStyle;