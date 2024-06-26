import Typography from '@mui/material/Typography'
import * as S from './footer-styles'

export const FooterBar = () => {
  return (
    <S.FooterBar>
      <Typography
        component="h4"
        variant="h5"
        sx={{ color: (theme) => theme.palette.grey.A700 }}
      >
        Desarrollado por Fulana de Tal
      </Typography>
      <Typography
        component="span"
        variant="subtitle1"
        sx={{ color: (theme) => theme.palette.grey.A700 }}
      >
        2021
      </Typography>
    </S.FooterBar>
  )
}
