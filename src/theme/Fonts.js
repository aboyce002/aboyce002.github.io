import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Kreon';
        src: local('Kreon'), url('../assets/fonts/Kreon/Kreon-VariableFont_wght.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Overpass';
        src: local('Overpass'), url('../assets/fonts/Overpass/Overpass-VariableFont_wght.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Overpass Italic';
        src: local('Overpass Italic'), url(../assets/fonts/Overpass/Overpass-Italic-VariableFont_wght.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), url(../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Montserrat Italic';
        src: local('Montserrat Italic'), url(../assets/fonts/Montserrat,Montserrat_Alternates/Montserrat/Montserrat-VariableFont_wght.ttf) format('truetype');
      }
      @font-face {
        font-family: 'Montserrat Bold';
        src: local('Montserrat Bold'), url(../assets/fonts/Montserrat,Montserrat_Alternates/Montserrat_Alternates.MontserratAlternates-Bold.ttf) format('truetype');
      }
    `}
  />
)

export default Fonts
