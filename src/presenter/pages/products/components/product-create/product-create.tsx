import Typography from '@mui/material/Typography'
import { FormCreateProduct } from './form-create-product'
import { FONTS } from '@/presenter/styles'
import * as S from './product-create-styles'

export const ProductCreate = () => {
  return (
    <S.ProductInfoContainer>
      <Typography
        component="h2"
        variant="h4"
        color="primary.dark"
        fontSize={FONTS.fontSizes['3xl']}
      >
        Cadastrar novo produto
      </Typography>

      <FormCreateProduct />
    </S.ProductInfoContainer>
  )
}
