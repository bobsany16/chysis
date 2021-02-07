import WebFont from 'webfontloader';

const WebFontConfig = {
  google: {
    families: ['Rubik', 'Rubik:900', 'Rubik:300', 'Rubik:600'],
  },
};

WebFont.load(WebFontConfig);

const Fonts = { Rubik: 'Rubik' };

export default Fonts;
