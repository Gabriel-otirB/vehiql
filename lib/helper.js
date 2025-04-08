// Helper function to serialize car data
export const serializeCarData = (car, wishlisted = false) => {
  return {
    ...car,
    price: car.price ? parseFloat(car.price.toString()) : 0,
    createdAt: car.createdAt?.toISOString(),
    updatedAt: car.updatedAt?.toISOString(),
    wishlisted: wishlisted,
  };
};

export const formatCurrency = (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency', currency: 'USD'
  });
}