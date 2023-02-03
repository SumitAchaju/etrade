import { toast } from "react-hot-toast";

export const cartToastAdd = () => toast.success("Successfully Added to Cart!!");
export const cartToastRemove = () =>
  toast.error("Successfully Removed from Cart!!");
export const productReviewCommentToast = () =>
  toast.success("Successfully Added!!");
export const addWishListToast = () =>
  toast.success("Successfully Added to WishList!!");
export const removeWishListToast = () =>
  toast.error("Successfully Removed from WishList!!");
