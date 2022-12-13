import { style } from "typestyle";

export const SectionCarrouselStyle = style({
    padding: '0 80px 40px 80px',
    paddingRight: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    $nest: {
        '& .title_carrousel_container': {
            display: 'flex',
            alignItems: 'center',
            margin: '40px 0',
            $nest: {
                '& h1': {
                    color: 'white',
                    fontFamily: 'Gilroy-Black',
                    fontSize: '38px',
                },
                '& img': {
                    
                    height: '50px',
                    marginRight: '30px'
                },
            }
        },
        '& .Highlights_container': {
            display: 'flex',
            overflowX: 'scroll',
            marginBottom: '50px',
        },
    }
});