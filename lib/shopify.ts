import axios from 'axios'

const SHOPIFY_API_VERSION = '2024-01'
const SHOP_NAME = process.env.NEXT_PUBLIC_SHOPIFY_STORE || 'your-store.myshopify.com'
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN

const shopifyClient = axios.create({
  baseURL: `https://${SHOP_NAME}/admin/api/${SHOPIFY_API_VERSION}`,
  headers: {
    'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
    'Content-Type': 'application/json',
  },
})

export const shopifyApi = {
  // Products
  async getProducts(limit = 10) {
    try {
      const response = await shopifyClient.get('/products.json', {
        params: { limit },
      })
      return response.data.products
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  },

  async getProductById(id: string) {
    try {
      const response = await shopifyClient.get(`/products/${id}.json`)
      return response.data.product
    } catch (error) {
      console.error('Error fetching product:', error)
      throw error
    }
  },

  // Collections
  async getCollections(limit = 10) {
    try {
      const response = await shopifyClient.get('/collections.json', {
        params: { limit },
      })
      return response.data.collections
    } catch (error) {
      console.error('Error fetching collections:', error)
      throw error
    }
  },

  // Orders
  async getOrders(limit = 10) {
    try {
      const response = await shopifyClient.get('/orders.json', {
        params: { limit, status: 'any' },
      })
      return response.data.orders
    } catch (error) {
      console.error('Error fetching orders:', error)
      throw error
    }
  },

  async getOrderById(id: string) {
    try {
      const response = await shopifyClient.get(`/orders/${id}.json`)
      return response.data.order
    } catch (error) {
      console.error('Error fetching order:', error)
      throw error
    }
  },

  // Customers
  async getCustomers(limit = 10) {
    try {
      const response = await shopifyClient.get('/customers.json', {
        params: { limit },
      })
      return response.data.customers
    } catch (error) {
      console.error('Error fetching customers:', error)
      throw error
    }
  },

  // Shop Info
  async getShopInfo() {
    try {
      const response = await shopifyClient.get('/shop.json')
      return response.data.shop
    } catch (error) {
      console.error('Error fetching shop info:', error)
      throw error
    }
  },
}

export default shopifyApi
