export interface Product {
  id: string
  title: string
  handle: string
  description: string
  productType: string
  vendor: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  tags: string[]
  status: 'active' | 'archived' | 'draft'
  variants: ProductVariant[]
  images: ProductImage[]
  priceRange: PriceRange
}

export interface ProductVariant {
  id: string
  title: string
  sku: string
  price: string
  position: number
  inventoryQuantity: number
  option1: string
  option2?: string
  option3?: string
}

export interface ProductImage {
  id: string
  src: string
  alt: string
  position: number
  width: number
  height: number
}

export interface PriceRange {
  minVariantPrice: string
  maxVariantPrice: string
}

export interface Collection {
  id: string
  title: string
  handle: string
  description: string
  image: {
    src: string
    alt: string
  }
  productsCount: number
  updatedAt: string
}

export interface Customer {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  createdAt: string
  updatedAt: string
  totalSpent: string
  ordersCount: number
  addresses: Address[]
}

export interface Address {
  id: string
  firstName: string
  lastName: string
  company: string
  address1: string
  address2: string
  city: string
  province: string
  country: string
  zip: string
  phone: string
  default: boolean
}

export interface Order {
  id: string
  orderNumber: number
  email: string
  createdAt: string
  updatedAt: string
  cancelledAt: string | null
  closedAt: string | null
  financial_status: 'authorized' | 'pending' | 'paid' | 'refunded' | 'voided'
  fulfillment_status: 'fulfilled' | 'partial' | 'unshipped' | 'undelivered' | 'restocked' | null
  totalPrice: string
  subtotalPrice: string
  totalTax: string
  totalShippingPrice: string
  currencyCode: string
  lineItems: LineItem[]
  customer: Customer
  shippingAddress: Address
  billingAddress: Address
}

export interface LineItem {
  id: string
  sku: string
  title: string
  quantity: number
  price: string
  product_id: string
  variant_id: string
}

export interface Shop {
  id: string
  name: string
  email: string
  domain: string
  createdAt: string
  updatedAt: string
  phone: string
  address: Address
  currency: string
  timeZone: string
  ianaTimezone: string
  primaryLocale: string
  planName: string
}
