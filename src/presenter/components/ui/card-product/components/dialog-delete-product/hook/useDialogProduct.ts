import { useState } from "react";
import { ProductModel } from "@/domain/models";
import { useAppDispatch } from "@/main/store/hook/useRedux";
import { loadProductDelete } from "@/main/store/ducks/products";

export function useDialogProduct(product: ProductModel) {
  const [isDialogProductDeleteOpen, setIsDialogProductDeleteOpen] =
    useState(false);

  const dispatch = useAppDispatch();

  const handleOpenDialog = () => setIsDialogProductDeleteOpen(true);

  const handleCloseDialog = () => setIsDialogProductDeleteOpen(false);

  const handleDeleteProduct = () => {
    dispatch(loadProductDelete({ body: { productId: product.id } }));
    handleCloseDialog();
  };

  return {
    handleDeleteProduct,
    handleCloseDialog,
    handleOpenDialog,
    isDialogProductDeleteOpen,
  };
}