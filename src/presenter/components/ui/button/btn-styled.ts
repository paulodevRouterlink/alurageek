import { alpha, styled } from '@mui/material'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { COLORS, FONTS } from '@/presenter/styles'
import { blue, grey } from '@mui/material/colors'

export const BtnStyled = styled(MuiButton)<MuiButtonProps>(
  ({ theme }) => `
  font-family: ${FONTS.fontFamily.OPEN_SANS};
  font-weight: ${FONTS.fontWeight.bold};
  font-size: ${FONTS.fontSizes.md};
  color: ${theme.palette.primary.main};
  text-transform: uppercase;

  transition: all 150ms ease;
  border-radius: 5px;
  border: 1px solid ${theme.palette.primary.main};

  &:hover {
    background-color: ${alpha(theme.palette.primary.contrastText, 0.8)};
    border-color: ${theme.palette.primary.dark};
    color: ${theme.palette.primary.main};
  }

  &:active {
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.5), inset 0 1.5px 1px ${alpha(theme.palette.primary.contrastText, 0.2)}, inset 0 -2px 1px ${alpha(theme.palette.primary.contrastText, 0.2)};
    transform: scale(0.99);
  }

  &:focusVisible {
    box-shadow: 0 0 0 4px ${theme.palette.primary.light};
    outline: none;
  }

  &:disabled {
    background-color: ${COLORS.bunker[200]};
    color: ${COLORS.bunker[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
`,
)

export const Button = styled('button')(
  ({ theme }) => `
  font-family: ${FONTS.fontFamily.OPEN_SANS};
  font-weight: ${FONTS.fontWeight.bold};
  font-size: ${FONTS.fontSizes.lg};
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }
  `,
)
