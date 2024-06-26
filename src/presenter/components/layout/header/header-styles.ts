import { styled } from '@mui/material'
import { FONTS } from '@/presenter/styles'

type HeadingProps = { imageUrl: string }

export const Heading = styled('header')<HeadingProps>(
  ({ theme, imageUrl }) => ({
    background: `url(${imageUrl})`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    height: theme.spacing(116),
    padding: theme.spacing(8),

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',

    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(4),
      marginLeft: theme.spacing(61.5),
      color: theme.palette.common.white,

      '& h3': {
        ...theme.typography.h1,
        fontSize: FONTS.fontSizes['6xl'],

        [theme.breakpoints.down('sm')]: {
          textAlign: 'center',
        },
      },

      '& span': {
        ...theme.typography.subtitle1,
      },

      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
      },

      [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(7),
      },
    },

    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  }),
)
