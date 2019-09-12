import Stripe from 'stripe'
import { stripe } from './configure'

const main = async () => {
  const procustCreateOption: Stripe.products.IProductCreationOptions = {
    name: 'my-stripe-product',
    type: 'service'
  }

  const product = await stripe.products.create(procustCreateOption)

  const planCreateOptions: Stripe.plans.IPlanCreationOptions[] = [
    {
      amount: 1,
      currency: 'jpy',
      interval: 'month',
      usage_type: 'metered',
      aggregate_usage: 'last_during_period',
      product: product.id
    },
    { amount: 2, currency: 'jpy', interval: 'month', product: product.id }
  ]

  const plans = await Promise.all([
    stripe.plans.create(planCreateOptions[0]),
    stripe.plans.create(planCreateOptions[1])
  ])

  process.stdout.write(
    `The Stripe plans ${plans[0].id} and ${plans[1].id} for ${product.id} are created.`
  )
}

main()
