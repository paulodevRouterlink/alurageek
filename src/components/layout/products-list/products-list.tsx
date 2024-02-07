import { ReactNode, useEffect } from 'react'
import { Typography, useTheme } from '@mui/material'
import { CardProduct } from '@/components/ui'
import { useAppDispatch, useAppSelector } from '@/store/hook/useRedux'
import { fetchProducts } from '@/store/reducers/products'
import * as S from './products-list-styles'

type ProductsListProps = {
  title: string
  children?: ReactNode
}

export const ProductsList = ({ title, children }: ProductsListProps) => {
  const products = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()
  const theme = useTheme()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <S.Container>
      <div>
        <Typography
          component="h3"
          variant="h2"
          sx={{ color: theme.palette.grey[900] }}
        >
          {title}
        </Typography>

        {children}
      </div>

      <S.Products>
        {products.map((item, index) => (
          <CardProduct key={index} card={item} />
        ))}
      </S.Products>
    </S.Container>
  )
}